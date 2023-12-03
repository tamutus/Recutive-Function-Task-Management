import { t, publicProcedure } from "./helpers/createRouter";
import { EnergiesToPersonsAggregateSchema } from "../schemas/aggregateEnergiesToPersons.schema";
import { EnergiesToPersonsCreateManySchema } from "../schemas/createManyEnergiesToPersons.schema";
import { EnergiesToPersonsCreateOneSchema } from "../schemas/createOneEnergiesToPersons.schema";
import { EnergiesToPersonsDeleteManySchema } from "../schemas/deleteManyEnergiesToPersons.schema";
import { EnergiesToPersonsDeleteOneSchema } from "../schemas/deleteOneEnergiesToPersons.schema";
import { EnergiesToPersonsFindFirstSchema } from "../schemas/findFirstEnergiesToPersons.schema";
import { EnergiesToPersonsFindManySchema } from "../schemas/findManyEnergiesToPersons.schema";
import { EnergiesToPersonsFindUniqueSchema } from "../schemas/findUniqueEnergiesToPersons.schema";
import { EnergiesToPersonsGroupBySchema } from "../schemas/groupByEnergiesToPersons.schema";
import { EnergiesToPersonsUpdateManySchema } from "../schemas/updateManyEnergiesToPersons.schema";
import { EnergiesToPersonsUpdateOneSchema } from "../schemas/updateOneEnergiesToPersons.schema";
import { EnergiesToPersonsUpsertSchema } from "../schemas/upsertOneEnergiesToPersons.schema";

export const energiestopersonsRouter = t.router({
  aggregateEnergiesToPersons: publicProcedure
    .input(EnergiesToPersonsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateEnergiesToPersons = await ctx.prisma.energiesToPersons.aggregate(input);
      return aggregateEnergiesToPersons;
    }),
  createManyEnergiesToPersons: publicProcedure
    .input(EnergiesToPersonsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyEnergiesToPersons = await ctx.prisma.energiesToPersons.createMany(input);
      return createManyEnergiesToPersons;
    }),
  createOneEnergiesToPersons: publicProcedure
    .input(EnergiesToPersonsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneEnergiesToPersons = await ctx.prisma.energiesToPersons.create(input);
      return createOneEnergiesToPersons;
    }),
  deleteManyEnergiesToPersons: publicProcedure
    .input(EnergiesToPersonsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyEnergiesToPersons = await ctx.prisma.energiesToPersons.deleteMany(input);
      return deleteManyEnergiesToPersons;
    }),
  deleteOneEnergiesToPersons: publicProcedure
    .input(EnergiesToPersonsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneEnergiesToPersons = await ctx.prisma.energiesToPersons.delete(input);
      return deleteOneEnergiesToPersons;
    }),
  findFirstEnergiesToPersons: publicProcedure
    .input(EnergiesToPersonsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergiesToPersons = await ctx.prisma.energiesToPersons.findFirst(input);
      return findFirstEnergiesToPersons;
    }),
  findFirstEnergiesToPersonsOrThrow: publicProcedure
    .input(EnergiesToPersonsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergiesToPersonsOrThrow = await ctx.prisma.energiesToPersons.findFirstOrThrow(input);
      return findFirstEnergiesToPersonsOrThrow;
    }),
  findManyEnergiesToPersons: publicProcedure
    .input(EnergiesToPersonsFindManySchema).query(async ({ ctx, input }) => {
      const findManyEnergiesToPersons = await ctx.prisma.energiesToPersons.findMany(input);
      return findManyEnergiesToPersons;
    }),
  findUniqueEnergiesToPersons: publicProcedure
    .input(EnergiesToPersonsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergiesToPersons = await ctx.prisma.energiesToPersons.findUnique(input);
      return findUniqueEnergiesToPersons;
    }),
  findUniqueEnergiesToPersonsOrThrow: publicProcedure
    .input(EnergiesToPersonsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergiesToPersonsOrThrow = await ctx.prisma.energiesToPersons.findUniqueOrThrow(input);
      return findUniqueEnergiesToPersonsOrThrow;
    }),
  groupByEnergiesToPersons: publicProcedure
    .input(EnergiesToPersonsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByEnergiesToPersons = await ctx.prisma.energiesToPersons.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByEnergiesToPersons;
    }),
  updateManyEnergiesToPersons: publicProcedure
    .input(EnergiesToPersonsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyEnergiesToPersons = await ctx.prisma.energiesToPersons.updateMany(input);
      return updateManyEnergiesToPersons;
    }),
  updateOneEnergiesToPersons: publicProcedure
    .input(EnergiesToPersonsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneEnergiesToPersons = await ctx.prisma.energiesToPersons.update(input);
      return updateOneEnergiesToPersons;
    }),
  upsertOneEnergiesToPersons: publicProcedure
    .input(EnergiesToPersonsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneEnergiesToPersons = await ctx.prisma.energiesToPersons.upsert(input);
      return upsertOneEnergiesToPersons;
    }),

}) 
