import { prisma } from ".";

export const getUserRolesByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
        include: {
            roles: {
                select: {
                    role: {
                        select: {
                            name: true,
                            permissions: {
                                select: {
                                    permission: {
                                        select: {
                                            name: true,
                                        },
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });

    if (!user) {
        return null;
    }

    return user?.roles;
};