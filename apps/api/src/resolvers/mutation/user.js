import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { isEmpty } from "lodash";

export default {
  register: async (_, args, ctx) => {
    if (isEmpty(args.input.password)) {
      throw new Error("Password was not provided.");
    }
    const password = await bcrypt.hash(args.input.password, 10);
    const userExists = await ctx.models.User.exists({
      email: args.input.email,
    });

    if (userExists) {
      throw new Error(
        "There is already a registered user with the given email."
      );
    }

    const user = await ctx.models.User.create({
      name: args.input.name,
      email: args.input.email,
      password,
      resetToken: null,
      resetTokenExpiry: null,
    });
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

    return { token, me: user };
  },
  login: async (_, args, ctx) => {
    const user = await ctx.models.User.findOne({ email: args.input.email });

    if (!user) {
      throw new Error("The user with the provided email is not registered.");
    }

    if (isEmpty(args.input.password)) {
      throw new Error("Password was not provided.");
    }

    if (isEmpty(user.password)) {
      throw new Error("Account was created with google authentication.");
    }

    const passwordMatch = await bcrypt.compare(
      args.input.password,
      user.password
    );

    if (!passwordMatch) {
      throw new Error("The password entered is incorrect.");
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

    return { token, me: user };
  },
};
