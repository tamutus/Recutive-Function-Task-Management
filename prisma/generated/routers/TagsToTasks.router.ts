import { t, publicProcedure } from "./helpers/createRouter";
import { TagsToTasksAggregateSchema } from "../schemas/aggregateTagsToTasks.schema";
import { TagsToTasksCreateManySchema } from "../schemas/createManyTagsToTasks.schema";
import { TagsToTasksCreateOneSchema } from "../schemas/createOneTagsToTasks.schema";
import { TagsToTasksDeleteManySchema } from "../schemas/deleteManyTagsToTasks.schema";
import { TagsToTasksDeleteOneSchema } from "../schemas/deleteOneTagsToTasks.schema";
import { TagsToTasksFindFirstSchema } from "../schemas/findFirstTagsToTasks.schema";
import { TagsToTasksFindManySchema } from "../schemas/findManyTagsToTasks.schema";
import { TagsToTasksFindUniqueSchema } from "../schemas/findUniqueTagsToTasks.schema";
import { TagsToTasksGroupBySchema } from "../schemas/groupByTagsToTasks.schema";
import { TagsToTasksUpdateManySchema } from "../schemas/updateManyTagsToTasks.schema";
import { TagsToTasksUpdateOneSchema } from "../schemas/updateOneTagsToTasks.schema";
import { TagsToTasksUpsertSchema } from "../schemas/upsertOneTagsToTasks.schema";

export const tagstotasksRouter = t.router({
  aggregateTagsToTasks: publicProcedure
    .input(TagsToTasksAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateTagsToTasks = await ctx.prisma.tagsToTasks.aggregate(input);
      return aggregateTagsToTasks;
    }),
  createManyTagsToTasks: publicProcedure
    .input(TagsToTasksCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyTagsToTasks = await ctx.prisma.tagsToTasks.createMany(input);
      return createManyTagsToTasks;
    }),
  createOneTagsToTasks: publicProcedure
    .input(TagsToTasksCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneTagsToTasks = await ctx.prisma.tagsToTasks.create(input);
      return createOneTagsToTasks;
    }),
  deleteManyTagsToTasks: publicProcedure
    .input(TagsToTasksDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyTagsToTasks = await ctx.prisma.tagsToTasks.deleteMany(input);
      return deleteManyTagsToTasks;
    }),
  deleteOneTagsToTasks: publicProcedure
    .input(TagsToTasksDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneTagsToTasks = await ctx.prisma.tagsToTasks.delete(input);
      return deleteOneTagsToTasks;
    }),
  findFirstTagsToTasks: publicProcedure
    .input(TagsToTasksFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTagsToTasks = await ctx.prisma.tagsToTasks.findFirst(input);
      return findFirstTagsToTasks;
    }),
  findFirstTagsToTasksOrThrow: publicProcedure
    .input(TagsToTasksFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTagsToTasksOrThrow = await ctx.prisma.tagsToTasks.findFirstOrThrow(input);
      return findFirstTagsToTasksOrThrow;
    }),
  findManyTagsToTasks: publicProcedure
    .input(TagsToTasksFindManySchema).query(async ({ ctx, input }) => {
      const findManyTagsToTasks = await ctx.prisma.tagsToTasks.findMany(input);
      return findManyTagsToTasks;
    }),
  findUniqueTagsToTasks: publicProcedure
    .input(TagsToTasksFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTagsToTasks = await ctx.prisma.tagsToTasks.findUnique(input);
      return findUniqueTagsToTasks;
    }),
  findUniqueTagsToTasksOrThrow: publicProcedure
    .input(TagsToTasksFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTagsToTasksOrThrow = await ctx.prisma.tagsToTasks.findUniqueOrThrow(input);
      return findUniqueTagsToTasksOrThrow;
    }),
  groupByTagsToTasks: publicProcedure
    .input(TagsToTasksGroupBySchema).query(async ({ ctx, input }) => {
      const groupByTagsToTasks = await ctx.prisma.tagsToTasks.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTagsToTasks;
    }),
  updateManyTagsToTasks: publicProcedure
    .input(TagsToTasksUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyTagsToTasks = await ctx.prisma.tagsToTasks.updateMany(input);
      return updateManyTagsToTasks;
    }),
  updateOneTagsToTasks: publicProcedure
    .input(TagsToTasksUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneTagsToTasks = await ctx.prisma.tagsToTasks.update(input);
      return updateOneTagsToTasks;
    }),
  upsertOneTagsToTasks: publicProcedure
    .input(TagsToTasksUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneTagsToTasks = await ctx.prisma.tagsToTasks.upsert(input);
      return upsertOneTagsToTasks;
    }),

}) 
