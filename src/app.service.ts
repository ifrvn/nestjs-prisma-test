import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async user(where: Prisma.UserWhereUniqueInput, include?: Prisma.UserInclude) {
    const user = await this.prisma.user.findUnique({
      where,
      include,
    });
    return user;
  }

  async test() {
    const user = await this.user({ id: 1 }, { profile: true });
    return user?.profile; // here's the problem
  }
}
