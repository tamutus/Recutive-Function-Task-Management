import { t, publicProcedure } from "./helpers/createRouter";
import { SkillsToTasksAggregateSchema } from "../schemas/aggregateSkillsToTasks.schema";
import { SkillsToTasksCreateManySchema } from "../schemas/createManySkillsToTasks.schema";
import { SkillsToTasksCreateOneSchema } from "../schemas/createOneSkillsToTasks.schema";
import { SkillsToTasksDeleteManySchema } from "../schemas/deleteManySkillsToTasks.schema";
import { SkillsToTasksDeleteOneSchema } from "../schemas/deleteOneSkillsToTasks.schema";
import { SkillsToTasksFindFirstSchema } from "../schemas/findFirstSkillsToTasks.schema";
import { SkillsToTasksFindManySchema } from "../schemas/findManySkillsToTasks.schema";
import { SkillsToTasksFindUniqueSchema } from "../schemas/findUniqueSkillsToTasks.schema";
import { SkillsToTasksGroupBySchema } from "../schemas/groupBySkillsToTasks.schema";
import { SkillsToTasksUpdateManySchema } from "../schemas/updateManySkillsToTasks.schema";
import { SkillsToTasksUpdateOneSchema } from "../schemas/updateOneSkillsToTasks.schema";
import { SkillsToTasksUpsertSchema } from "../schemas/upsertOneSkillsToTasks.schema";

export const skillstotasksRouter = t.router({
  aggregateSkillsToTasks: publicProcedure
    .input(SkillsToTasksAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateSkillsToTasks = await ctx.prisma.skillsToTasks.aggregate(input);
      return aggregateSkillsToTasks;
    }),
  createManySkillsToTasks: publicProcedure
    .input(SkillsToTasksCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManySkillsToTasks = await ctx.prisma.skillsToTasks.createMany(input);
      return createManySkillsToTasks;
    }),
  createOneSkillsToTasks: publicProcedure
    .input(SkillsToTasksCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneSkillsToTasks = await ctx.prisma.skillsToTasks.create(input);
      return createOneSkillsToTasks;
    }),
  deleteManySkillsToTasks: publicProcedure
    .input(SkillsToTasksDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManySkillsToTasks = await ctx.prisma.skillsToTasks.deleteMany(input);
      return deleteManySkillsToTasks;
    }),
  deleteOneSkillsToTasks: publicProcedure
    .input(SkillsToTasksDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneSkillsToTasks = await ctx.prisma.skillsToTasks.delete(input);
      return deleteOneSkillsToTasks;
    }),
  findFirstSkillsToTasks: publicProcedure
    .input(SkillsToTasksFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSkillsToTasks = await ctx.prisma.skillsToTasks.findFirst(input);
      return findFirstSkillsToTasks;
    }),
  findFirstSkillsToTasksOrThrow: publicProcedure
    .input(SkillsToTasksFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSkillsToTasksOrThrow = await ctx.prisma.skillsToTasks.findFirstOrThrow(input);
      return findFirstSkillsToTasksOrThrow;
    }),
  findManySkillsToTasks: publicProcedure
    .input(SkillsToTasksFindManySchema).query(async ({ ctx, input }) => {
      const findManySkillsToTasks = await ctx.prisma.skillsToTasks.findMany(input);
      return findManySkillsToTasks;
    }),
  findUniqueSkillsToTasks: publicProcedure
    .input(SkillsToTasksFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSkillsToTasks = await ctx.prisma.skillsToTasks.findUnique(input);
      return findUniqueSkillsToTasks;
    }),
  findUniqueSkillsToTasksOrThrow: publicProcedure
    .input(SkillsToTasksFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSkillsToTasksOrThrow = await ctx.prisma.skillsToTasks.findUniqueOrThrow(input);
      return findUniqueSkillsToTasksOrThrow;
    }),
  groupBySkillsToTasks: publicProcedure
    .input(SkillsToTasksGroupBySchema).query(async ({ ctx, input }) => {
      const groupBySkillsToTasks = await ctx.prisma.skillsToTasks.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupBySkillsToTasks;
    }),
  updateManySkillsToTasks: publicProcedure
    .input(SkillsToTasksUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManySkillsToTasks = await ctx.prisma.skillsToTasks.updateMany(input);
      return updateManySkillsToTasks;
    }),
  updateOneSkillsToTasks: publicProcedure
    .input(SkillsToTasksUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneSkillsToTasks = await ctx.prisma.skillsToTasks.update(input);
      return updateOneSkillsToTasks;
    }),
  upsertOneSkillsToTasks: publicProcedure
    .input(SkillsToTasksUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneSkillsToTasks = await ctx.prisma.skillsToTasks.upsert(input);
      return upsertOneSkillsToTasks;
    }),

}) 
