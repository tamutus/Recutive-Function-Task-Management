import { t, publicProcedure } from "./helpers/createRouter";
import { EnergiesToTaskWorksAggregateSchema } from "../schemas/aggregateEnergiesToTaskWorks.schema";
import { EnergiesToTaskWorksCreateManySchema } from "../schemas/createManyEnergiesToTaskWorks.schema";
import { EnergiesToTaskWorksCreateOneSchema } from "../schemas/createOneEnergiesToTaskWorks.schema";
import { EnergiesToTaskWorksDeleteManySchema } from "../schemas/deleteManyEnergiesToTaskWorks.schema";
import { EnergiesToTaskWorksDeleteOneSchema } from "../schemas/deleteOneEnergiesToTaskWorks.schema";
import { EnergiesToTaskWorksFindFirstSchema } from "../schemas/findFirstEnergiesToTaskWorks.schema";
import { EnergiesToTaskWorksFindManySchema } from "../schemas/findManyEnergiesToTaskWorks.schema";
import { EnergiesToTaskWorksFindUniqueSchema } from "../schemas/findUniqueEnergiesToTaskWorks.schema";
import { EnergiesToTaskWorksGroupBySchema } from "../schemas/groupByEnergiesToTaskWorks.schema";
import { EnergiesToTaskWorksUpdateManySchema } from "../schemas/updateManyEnergiesToTaskWorks.schema";
import { EnergiesToTaskWorksUpdateOneSchema } from "../schemas/updateOneEnergiesToTaskWorks.schema";
import { EnergiesToTaskWorksUpsertSchema } from "../schemas/upsertOneEnergiesToTaskWorks.schema";

export const energiestotaskworksRouter = t.router({
  aggregateEnergiesToTaskWorks: publicProcedure
    .input(EnergiesToTaskWorksAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateEnergiesToTaskWorks = await ctx.prisma.energiesToTaskWorks.aggregate(input);
      return aggregateEnergiesToTaskWorks;
    }),
  createManyEnergiesToTaskWorks: publicProcedure
    .input(EnergiesToTaskWorksCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyEnergiesToTaskWorks = await ctx.prisma.energiesToTaskWorks.createMany(input);
      return createManyEnergiesToTaskWorks;
    }),
  createOneEnergiesToTaskWorks: publicProcedure
    .input(EnergiesToTaskWorksCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneEnergiesToTaskWorks = await ctx.prisma.energiesToTaskWorks.create(input);
      return createOneEnergiesToTaskWorks;
    }),
  deleteManyEnergiesToTaskWorks: publicProcedure
    .input(EnergiesToTaskWorksDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyEnergiesToTaskWorks = await ctx.prisma.energiesToTaskWorks.deleteMany(input);
      return deleteManyEnergiesToTaskWorks;
    }),
  deleteOneEnergiesToTaskWorks: publicProcedure
    .input(EnergiesToTaskWorksDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneEnergiesToTaskWorks = await ctx.prisma.energiesToTaskWorks.delete(input);
      return deleteOneEnergiesToTaskWorks;
    }),
  findFirstEnergiesToTaskWorks: publicProcedure
    .input(EnergiesToTaskWorksFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergiesToTaskWorks = await ctx.prisma.energiesToTaskWorks.findFirst(input);
      return findFirstEnergiesToTaskWorks;
    }),
  findFirstEnergiesToTaskWorksOrThrow: publicProcedure
    .input(EnergiesToTaskWorksFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergiesToTaskWorksOrThrow = await ctx.prisma.energiesToTaskWorks.findFirstOrThrow(input);
      return findFirstEnergiesToTaskWorksOrThrow;
    }),
  findManyEnergiesToTaskWorks: publicProcedure
    .input(EnergiesToTaskWorksFindManySchema).query(async ({ ctx, input }) => {
      const findManyEnergiesToTaskWorks = await ctx.prisma.energiesToTaskWorks.findMany(input);
      return findManyEnergiesToTaskWorks;
    }),
  findUniqueEnergiesToTaskWorks: publicProcedure
    .input(EnergiesToTaskWorksFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergiesToTaskWorks = await ctx.prisma.energiesToTaskWorks.findUnique(input);
      return findUniqueEnergiesToTaskWorks;
    }),
  findUniqueEnergiesToTaskWorksOrThrow: publicProcedure
    .input(EnergiesToTaskWorksFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergiesToTaskWorksOrThrow = await ctx.prisma.energiesToTaskWorks.findUniqueOrThrow(input);
      return findUniqueEnergiesToTaskWorksOrThrow;
    }),
  groupByEnergiesToTaskWorks: publicProcedure
    .input(EnergiesToTaskWorksGroupBySchema).query(async ({ ctx, input }) => {
      const groupByEnergiesToTaskWorks = await ctx.prisma.energiesToTaskWorks.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByEnergiesToTaskWorks;
    }),
  updateManyEnergiesToTaskWorks: publicProcedure
    .input(EnergiesToTaskWorksUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyEnergiesToTaskWorks = await ctx.prisma.energiesToTaskWorks.updateMany(input);
      return updateManyEnergiesToTaskWorks;
    }),
  updateOneEnergiesToTaskWorks: publicProcedure
    .input(EnergiesToTaskWorksUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneEnergiesToTaskWorks = await ctx.prisma.energiesToTaskWorks.update(input);
      return updateOneEnergiesToTaskWorks;
    }),
  upsertOneEnergiesToTaskWorks: publicProcedure
    .input(EnergiesToTaskWorksUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneEnergiesToTaskWorks = await ctx.prisma.energiesToTaskWorks.upsert(input);
      return upsertOneEnergiesToTaskWorks;
    }),

}) 
