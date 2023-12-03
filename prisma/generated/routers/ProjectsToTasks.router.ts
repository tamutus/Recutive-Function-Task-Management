import { t, publicProcedure } from "./helpers/createRouter";
import { ProjectsToTasksAggregateSchema } from "../schemas/aggregateProjectsToTasks.schema";
import { ProjectsToTasksCreateManySchema } from "../schemas/createManyProjectsToTasks.schema";
import { ProjectsToTasksCreateOneSchema } from "../schemas/createOneProjectsToTasks.schema";
import { ProjectsToTasksDeleteManySchema } from "../schemas/deleteManyProjectsToTasks.schema";
import { ProjectsToTasksDeleteOneSchema } from "../schemas/deleteOneProjectsToTasks.schema";
import { ProjectsToTasksFindFirstSchema } from "../schemas/findFirstProjectsToTasks.schema";
import { ProjectsToTasksFindManySchema } from "../schemas/findManyProjectsToTasks.schema";
import { ProjectsToTasksFindUniqueSchema } from "../schemas/findUniqueProjectsToTasks.schema";
import { ProjectsToTasksGroupBySchema } from "../schemas/groupByProjectsToTasks.schema";
import { ProjectsToTasksUpdateManySchema } from "../schemas/updateManyProjectsToTasks.schema";
import { ProjectsToTasksUpdateOneSchema } from "../schemas/updateOneProjectsToTasks.schema";
import { ProjectsToTasksUpsertSchema } from "../schemas/upsertOneProjectsToTasks.schema";

export const projectstotasksRouter = t.router({
  aggregateProjectsToTasks: publicProcedure
    .input(ProjectsToTasksAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateProjectsToTasks = await ctx.prisma.projectsToTasks.aggregate(input);
      return aggregateProjectsToTasks;
    }),
  createManyProjectsToTasks: publicProcedure
    .input(ProjectsToTasksCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyProjectsToTasks = await ctx.prisma.projectsToTasks.createMany(input);
      return createManyProjectsToTasks;
    }),
  createOneProjectsToTasks: publicProcedure
    .input(ProjectsToTasksCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneProjectsToTasks = await ctx.prisma.projectsToTasks.create(input);
      return createOneProjectsToTasks;
    }),
  deleteManyProjectsToTasks: publicProcedure
    .input(ProjectsToTasksDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyProjectsToTasks = await ctx.prisma.projectsToTasks.deleteMany(input);
      return deleteManyProjectsToTasks;
    }),
  deleteOneProjectsToTasks: publicProcedure
    .input(ProjectsToTasksDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneProjectsToTasks = await ctx.prisma.projectsToTasks.delete(input);
      return deleteOneProjectsToTasks;
    }),
  findFirstProjectsToTasks: publicProcedure
    .input(ProjectsToTasksFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstProjectsToTasks = await ctx.prisma.projectsToTasks.findFirst(input);
      return findFirstProjectsToTasks;
    }),
  findFirstProjectsToTasksOrThrow: publicProcedure
    .input(ProjectsToTasksFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstProjectsToTasksOrThrow = await ctx.prisma.projectsToTasks.findFirstOrThrow(input);
      return findFirstProjectsToTasksOrThrow;
    }),
  findManyProjectsToTasks: publicProcedure
    .input(ProjectsToTasksFindManySchema).query(async ({ ctx, input }) => {
      const findManyProjectsToTasks = await ctx.prisma.projectsToTasks.findMany(input);
      return findManyProjectsToTasks;
    }),
  findUniqueProjectsToTasks: publicProcedure
    .input(ProjectsToTasksFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueProjectsToTasks = await ctx.prisma.projectsToTasks.findUnique(input);
      return findUniqueProjectsToTasks;
    }),
  findUniqueProjectsToTasksOrThrow: publicProcedure
    .input(ProjectsToTasksFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueProjectsToTasksOrThrow = await ctx.prisma.projectsToTasks.findUniqueOrThrow(input);
      return findUniqueProjectsToTasksOrThrow;
    }),
  groupByProjectsToTasks: publicProcedure
    .input(ProjectsToTasksGroupBySchema).query(async ({ ctx, input }) => {
      const groupByProjectsToTasks = await ctx.prisma.projectsToTasks.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByProjectsToTasks;
    }),
  updateManyProjectsToTasks: publicProcedure
    .input(ProjectsToTasksUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyProjectsToTasks = await ctx.prisma.projectsToTasks.updateMany(input);
      return updateManyProjectsToTasks;
    }),
  updateOneProjectsToTasks: publicProcedure
    .input(ProjectsToTasksUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneProjectsToTasks = await ctx.prisma.projectsToTasks.update(input);
      return updateOneProjectsToTasks;
    }),
  upsertOneProjectsToTasks: publicProcedure
    .input(ProjectsToTasksUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneProjectsToTasks = await ctx.prisma.projectsToTasks.upsert(input);
      return upsertOneProjectsToTasks;
    }),

}) 
