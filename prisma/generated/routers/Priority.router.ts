import { t, publicProcedure } from "./helpers/createRouter";
import { PriorityAggregateSchema } from "../schemas/aggregatePriority.schema";
import { PriorityCreateManySchema } from "../schemas/createManyPriority.schema";
import { PriorityCreateOneSchema } from "../schemas/createOnePriority.schema";
import { PriorityDeleteManySchema } from "../schemas/deleteManyPriority.schema";
import { PriorityDeleteOneSchema } from "../schemas/deleteOnePriority.schema";
import { PriorityFindFirstSchema } from "../schemas/findFirstPriority.schema";
import { PriorityFindManySchema } from "../schemas/findManyPriority.schema";
import { PriorityFindUniqueSchema } from "../schemas/findUniquePriority.schema";
import { PriorityGroupBySchema } from "../schemas/groupByPriority.schema";
import { PriorityUpdateManySchema } from "../schemas/updateManyPriority.schema";
import { PriorityUpdateOneSchema } from "../schemas/updateOnePriority.schema";
import { PriorityUpsertSchema } from "../schemas/upsertOnePriority.schema";

export const prioritiesRouter = t.router({
  aggregatePriority: publicProcedure
    .input(PriorityAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePriority = await ctx.prisma.priority.aggregate(input);
      return aggregatePriority;
    }),
  createManyPriority: publicProcedure
    .input(PriorityCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPriority = await ctx.prisma.priority.createMany(input);
      return createManyPriority;
    }),
  createOnePriority: publicProcedure
    .input(PriorityCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePriority = await ctx.prisma.priority.create(input);
      return createOnePriority;
    }),
  deleteManyPriority: publicProcedure
    .input(PriorityDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPriority = await ctx.prisma.priority.deleteMany(input);
      return deleteManyPriority;
    }),
  deleteOnePriority: publicProcedure
    .input(PriorityDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePriority = await ctx.prisma.priority.delete(input);
      return deleteOnePriority;
    }),
  findFirstPriority: publicProcedure
    .input(PriorityFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPriority = await ctx.prisma.priority.findFirst(input);
      return findFirstPriority;
    }),
  findFirstPriorityOrThrow: publicProcedure
    .input(PriorityFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPriorityOrThrow = await ctx.prisma.priority.findFirstOrThrow(input);
      return findFirstPriorityOrThrow;
    }),
  findManyPriority: publicProcedure
    .input(PriorityFindManySchema).query(async ({ ctx, input }) => {
      const findManyPriority = await ctx.prisma.priority.findMany(input);
      return findManyPriority;
    }),
  findUniquePriority: publicProcedure
    .input(PriorityFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePriority = await ctx.prisma.priority.findUnique(input);
      return findUniquePriority;
    }),
  findUniquePriorityOrThrow: publicProcedure
    .input(PriorityFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePriorityOrThrow = await ctx.prisma.priority.findUniqueOrThrow(input);
      return findUniquePriorityOrThrow;
    }),
  groupByPriority: publicProcedure
    .input(PriorityGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPriority = await ctx.prisma.priority.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPriority;
    }),
  updateManyPriority: publicProcedure
    .input(PriorityUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPriority = await ctx.prisma.priority.updateMany(input);
      return updateManyPriority;
    }),
  updateOnePriority: publicProcedure
    .input(PriorityUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePriority = await ctx.prisma.priority.update(input);
      return updateOnePriority;
    }),
  upsertOnePriority: publicProcedure
    .input(PriorityUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePriority = await ctx.prisma.priority.upsert(input);
      return upsertOnePriority;
    }),

}) 
