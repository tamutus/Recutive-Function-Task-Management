import { t, publicProcedure } from "./helpers/createRouter";
import { PrivateEnergiesToTaskWorksAggregateSchema } from "../schemas/aggregatePrivateEnergiesToTaskWorks.schema";
import { PrivateEnergiesToTaskWorksCreateManySchema } from "../schemas/createManyPrivateEnergiesToTaskWorks.schema";
import { PrivateEnergiesToTaskWorksCreateOneSchema } from "../schemas/createOnePrivateEnergiesToTaskWorks.schema";
import { PrivateEnergiesToTaskWorksDeleteManySchema } from "../schemas/deleteManyPrivateEnergiesToTaskWorks.schema";
import { PrivateEnergiesToTaskWorksDeleteOneSchema } from "../schemas/deleteOnePrivateEnergiesToTaskWorks.schema";
import { PrivateEnergiesToTaskWorksFindFirstSchema } from "../schemas/findFirstPrivateEnergiesToTaskWorks.schema";
import { PrivateEnergiesToTaskWorksFindManySchema } from "../schemas/findManyPrivateEnergiesToTaskWorks.schema";
import { PrivateEnergiesToTaskWorksFindUniqueSchema } from "../schemas/findUniquePrivateEnergiesToTaskWorks.schema";
import { PrivateEnergiesToTaskWorksGroupBySchema } from "../schemas/groupByPrivateEnergiesToTaskWorks.schema";
import { PrivateEnergiesToTaskWorksUpdateManySchema } from "../schemas/updateManyPrivateEnergiesToTaskWorks.schema";
import { PrivateEnergiesToTaskWorksUpdateOneSchema } from "../schemas/updateOnePrivateEnergiesToTaskWorks.schema";
import { PrivateEnergiesToTaskWorksUpsertSchema } from "../schemas/upsertOnePrivateEnergiesToTaskWorks.schema";

export const privateenergiestotaskworksRouter = t.router({
  aggregatePrivateEnergiesToTaskWorks: publicProcedure
    .input(PrivateEnergiesToTaskWorksAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrivateEnergiesToTaskWorks = await ctx.prisma.privateEnergiesToTaskWorks.aggregate(input);
      return aggregatePrivateEnergiesToTaskWorks;
    }),
  createManyPrivateEnergiesToTaskWorks: publicProcedure
    .input(PrivateEnergiesToTaskWorksCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrivateEnergiesToTaskWorks = await ctx.prisma.privateEnergiesToTaskWorks.createMany(input);
      return createManyPrivateEnergiesToTaskWorks;
    }),
  createOnePrivateEnergiesToTaskWorks: publicProcedure
    .input(PrivateEnergiesToTaskWorksCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrivateEnergiesToTaskWorks = await ctx.prisma.privateEnergiesToTaskWorks.create(input);
      return createOnePrivateEnergiesToTaskWorks;
    }),
  deleteManyPrivateEnergiesToTaskWorks: publicProcedure
    .input(PrivateEnergiesToTaskWorksDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrivateEnergiesToTaskWorks = await ctx.prisma.privateEnergiesToTaskWorks.deleteMany(input);
      return deleteManyPrivateEnergiesToTaskWorks;
    }),
  deleteOnePrivateEnergiesToTaskWorks: publicProcedure
    .input(PrivateEnergiesToTaskWorksDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrivateEnergiesToTaskWorks = await ctx.prisma.privateEnergiesToTaskWorks.delete(input);
      return deleteOnePrivateEnergiesToTaskWorks;
    }),
  findFirstPrivateEnergiesToTaskWorks: publicProcedure
    .input(PrivateEnergiesToTaskWorksFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateEnergiesToTaskWorks = await ctx.prisma.privateEnergiesToTaskWorks.findFirst(input);
      return findFirstPrivateEnergiesToTaskWorks;
    }),
  findFirstPrivateEnergiesToTaskWorksOrThrow: publicProcedure
    .input(PrivateEnergiesToTaskWorksFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateEnergiesToTaskWorksOrThrow = await ctx.prisma.privateEnergiesToTaskWorks.findFirstOrThrow(input);
      return findFirstPrivateEnergiesToTaskWorksOrThrow;
    }),
  findManyPrivateEnergiesToTaskWorks: publicProcedure
    .input(PrivateEnergiesToTaskWorksFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrivateEnergiesToTaskWorks = await ctx.prisma.privateEnergiesToTaskWorks.findMany(input);
      return findManyPrivateEnergiesToTaskWorks;
    }),
  findUniquePrivateEnergiesToTaskWorks: publicProcedure
    .input(PrivateEnergiesToTaskWorksFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateEnergiesToTaskWorks = await ctx.prisma.privateEnergiesToTaskWorks.findUnique(input);
      return findUniquePrivateEnergiesToTaskWorks;
    }),
  findUniquePrivateEnergiesToTaskWorksOrThrow: publicProcedure
    .input(PrivateEnergiesToTaskWorksFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateEnergiesToTaskWorksOrThrow = await ctx.prisma.privateEnergiesToTaskWorks.findUniqueOrThrow(input);
      return findUniquePrivateEnergiesToTaskWorksOrThrow;
    }),
  groupByPrivateEnergiesToTaskWorks: publicProcedure
    .input(PrivateEnergiesToTaskWorksGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrivateEnergiesToTaskWorks = await ctx.prisma.privateEnergiesToTaskWorks.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrivateEnergiesToTaskWorks;
    }),
  updateManyPrivateEnergiesToTaskWorks: publicProcedure
    .input(PrivateEnergiesToTaskWorksUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrivateEnergiesToTaskWorks = await ctx.prisma.privateEnergiesToTaskWorks.updateMany(input);
      return updateManyPrivateEnergiesToTaskWorks;
    }),
  updateOnePrivateEnergiesToTaskWorks: publicProcedure
    .input(PrivateEnergiesToTaskWorksUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrivateEnergiesToTaskWorks = await ctx.prisma.privateEnergiesToTaskWorks.update(input);
      return updateOnePrivateEnergiesToTaskWorks;
    }),
  upsertOnePrivateEnergiesToTaskWorks: publicProcedure
    .input(PrivateEnergiesToTaskWorksUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrivateEnergiesToTaskWorks = await ctx.prisma.privateEnergiesToTaskWorks.upsert(input);
      return upsertOnePrivateEnergiesToTaskWorks;
    }),

}) 
