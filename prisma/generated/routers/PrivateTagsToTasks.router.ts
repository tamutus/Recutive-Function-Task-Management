import { t, publicProcedure } from "./helpers/createRouter";
import { PrivateTagsToTasksAggregateSchema } from "../schemas/aggregatePrivateTagsToTasks.schema";
import { PrivateTagsToTasksCreateManySchema } from "../schemas/createManyPrivateTagsToTasks.schema";
import { PrivateTagsToTasksCreateOneSchema } from "../schemas/createOnePrivateTagsToTasks.schema";
import { PrivateTagsToTasksDeleteManySchema } from "../schemas/deleteManyPrivateTagsToTasks.schema";
import { PrivateTagsToTasksDeleteOneSchema } from "../schemas/deleteOnePrivateTagsToTasks.schema";
import { PrivateTagsToTasksFindFirstSchema } from "../schemas/findFirstPrivateTagsToTasks.schema";
import { PrivateTagsToTasksFindManySchema } from "../schemas/findManyPrivateTagsToTasks.schema";
import { PrivateTagsToTasksFindUniqueSchema } from "../schemas/findUniquePrivateTagsToTasks.schema";
import { PrivateTagsToTasksGroupBySchema } from "../schemas/groupByPrivateTagsToTasks.schema";
import { PrivateTagsToTasksUpdateManySchema } from "../schemas/updateManyPrivateTagsToTasks.schema";
import { PrivateTagsToTasksUpdateOneSchema } from "../schemas/updateOnePrivateTagsToTasks.schema";
import { PrivateTagsToTasksUpsertSchema } from "../schemas/upsertOnePrivateTagsToTasks.schema";

export const privatetagstotasksRouter = t.router({
  aggregatePrivateTagsToTasks: publicProcedure
    .input(PrivateTagsToTasksAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrivateTagsToTasks = await ctx.prisma.privateTagsToTasks.aggregate(input);
      return aggregatePrivateTagsToTasks;
    }),
  createManyPrivateTagsToTasks: publicProcedure
    .input(PrivateTagsToTasksCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrivateTagsToTasks = await ctx.prisma.privateTagsToTasks.createMany(input);
      return createManyPrivateTagsToTasks;
    }),
  createOnePrivateTagsToTasks: publicProcedure
    .input(PrivateTagsToTasksCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrivateTagsToTasks = await ctx.prisma.privateTagsToTasks.create(input);
      return createOnePrivateTagsToTasks;
    }),
  deleteManyPrivateTagsToTasks: publicProcedure
    .input(PrivateTagsToTasksDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrivateTagsToTasks = await ctx.prisma.privateTagsToTasks.deleteMany(input);
      return deleteManyPrivateTagsToTasks;
    }),
  deleteOnePrivateTagsToTasks: publicProcedure
    .input(PrivateTagsToTasksDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrivateTagsToTasks = await ctx.prisma.privateTagsToTasks.delete(input);
      return deleteOnePrivateTagsToTasks;
    }),
  findFirstPrivateTagsToTasks: publicProcedure
    .input(PrivateTagsToTasksFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateTagsToTasks = await ctx.prisma.privateTagsToTasks.findFirst(input);
      return findFirstPrivateTagsToTasks;
    }),
  findFirstPrivateTagsToTasksOrThrow: publicProcedure
    .input(PrivateTagsToTasksFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateTagsToTasksOrThrow = await ctx.prisma.privateTagsToTasks.findFirstOrThrow(input);
      return findFirstPrivateTagsToTasksOrThrow;
    }),
  findManyPrivateTagsToTasks: publicProcedure
    .input(PrivateTagsToTasksFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrivateTagsToTasks = await ctx.prisma.privateTagsToTasks.findMany(input);
      return findManyPrivateTagsToTasks;
    }),
  findUniquePrivateTagsToTasks: publicProcedure
    .input(PrivateTagsToTasksFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateTagsToTasks = await ctx.prisma.privateTagsToTasks.findUnique(input);
      return findUniquePrivateTagsToTasks;
    }),
  findUniquePrivateTagsToTasksOrThrow: publicProcedure
    .input(PrivateTagsToTasksFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateTagsToTasksOrThrow = await ctx.prisma.privateTagsToTasks.findUniqueOrThrow(input);
      return findUniquePrivateTagsToTasksOrThrow;
    }),
  groupByPrivateTagsToTasks: publicProcedure
    .input(PrivateTagsToTasksGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrivateTagsToTasks = await ctx.prisma.privateTagsToTasks.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrivateTagsToTasks;
    }),
  updateManyPrivateTagsToTasks: publicProcedure
    .input(PrivateTagsToTasksUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrivateTagsToTasks = await ctx.prisma.privateTagsToTasks.updateMany(input);
      return updateManyPrivateTagsToTasks;
    }),
  updateOnePrivateTagsToTasks: publicProcedure
    .input(PrivateTagsToTasksUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrivateTagsToTasks = await ctx.prisma.privateTagsToTasks.update(input);
      return updateOnePrivateTagsToTasks;
    }),
  upsertOnePrivateTagsToTasks: publicProcedure
    .input(PrivateTagsToTasksUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrivateTagsToTasks = await ctx.prisma.privateTagsToTasks.upsert(input);
      return upsertOnePrivateTagsToTasks;
    }),

}) 
