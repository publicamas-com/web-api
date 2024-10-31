export class UserModel {
    id: string;
    email: string;
    hash: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;
    photoUrl: string;
    emailVerifiedAt: Date;
    muteSounds: boolean;
    isLocked: boolean;
    badAttempts: number;
    lastLogin: Date;
    deletedAt: Date;
}