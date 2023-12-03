import { t, publicProcedure } from "./helpers/createRouter";
import { PrioritiesToTasksAggregateSchema } from "../schemas/aggregatePrioritiesToTasks.schema";
import { PrioritiesToTasksCreateManySchema } from "../schemas/createManyPrioritiesToTasks.schema";
import { PrioritiesToTasksCreateOneSchema } from "../schemas/createOnePrioritiesToTasks.schema";
import { PrioritiesToTasksDeleteManySchema } from "../schemas/deleteManyPrioritiesToTasks.schema";
import { PrioritiesToTasksDeleteOneSchema } from "../schemas/deleteOnePrioritiesToTasks.schema";
import { PrioritiesToTasksFindFirstSchema } from "../schemas/findFirstPrioritiesToTasks.schema";
import { PrioritiesToTasksFindManySchema } from "../schemas/findManyPrioritiesToTasks.schema";
import { PrioritiesToTasksFindUniqueSchema } from "../schemas/findUniquePrioritiesToTasks.schema";
import { PrioritiesToTasksGroupBySchema } from "../schemas/groupByPrioritiesToTasks.schema";
import { PrioritiesToTasksUpdateManySchema } from "../schemas/updateManyPrioritiesToTasks.schema";
import { PrioritiesToTasksUpdateOneSchema } from "../schemas/updateOnePrioritiesToTasks.schema";
import { PrioritiesToTasksUpsertSchema } from "../schemas/upsertOnePrioritiesToTasks.schema";

export const prioritiestotasksRouter = t.router({
  aggregatePrioritiesToTasks: publicProcedure
    .input(PrioritiesToTasksAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrioritiesToTasks = await ctx.prisma.prioritiesToTasks.aggregate(input);
      return aggregatePrioritiesToTasks;
    }),
  createManyPrioritiesToTasks: publicProcedure
    .input(PrioritiesToTasksCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrioritiesToTasks = await ctx.prisma.prioritiesToTasks.createMany(input);
      return createManyPrioritiesToTasks;
    }),
  createOnePrioritiesToTasks: publicProcedure
    .input(PrioritiesToTasksCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrioritiesToTasks = await ctx.prisma.prioritiesToTasks.create(input);
      return createOnePrioritiesToTasks;
    }),
  deleteManyPrioritiesToTasks: publicProcedure
    .input(PrioritiesToTasksDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrioritiesToTasks = await ctx.prisma.prioritiesToTasks.deleteMany(input);
      return deleteManyPrioritiesToTasks;
    }),
  deleteOnePrioritiesToTasks: publicProcedure
    .input(PrioritiesToTasksDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrioritiesToTasks = await ctx.prisma.prioritiesToTasks.delete(input);
      return deleteOnePrioritiesToTasks;
    }),
  findFirstPrioritiesToTasks: publicProcedure
    .input(PrioritiesToTasksFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrioritiesToTasks = await ctx.prisma.prioritiesToTasks.findFirst(input);
      return findFirstPrioritiesToTasks;
    }),
  findFirstPrioritiesToTasksOrThrow: publicProcedure
    .input(PrioritiesToTasksFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrioritiesToTasksOrThrow = await ctx.prisma.prioritiesToTasks.findFirstOrThrow(input);
      return findFirstPrioritiesToTasksOrThrow;
    }),
  findManyPrioritiesToTasks: publicProcedure
    .input(PrioritiesToTasksFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrioritiesToTasks = await ctx.prisma.prioritiesToTasks.findMany(input);
      return findManyPrioritiesToTasks;
    }),
  findUniquePrioritiesToTasks: publicProcedure
    .input(PrioritiesToTasksFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrioritiesToTasks = await ctx.prisma.prioritiesToTasks.findUnique(input);
      return findUniquePrioritiesToTasks;
    }),
  findUniquePrioritiesToTasksOrThrow: publicProcedure
    .input(PrioritiesToTasksFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrioritiesToTasksOrThrow = await ctx.prisma.prioritiesToTasks.findUniqueOrThrow(input);
      return findUniquePrioritiesToTasksOrThrow;
    }),
  groupByPrioritiesToTasks: publicProcedure
    .input(PrioritiesToTasksGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrioritiesToTasks = await ctx.prisma.prioritiesToTasks.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrioritiesToTasks;
    }),
  updateManyPrioritiesToTasks: publicProcedure
    .input(PrioritiesToTasksUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrioritiesToTasks = await ctx.prisma.prioritiesToTasks.updateMany(input);
      return updateManyPrioritiesToTasks;
    }),
  updateOnePrioritiesToTasks: publicProcedure
    .input(PrioritiesToTasksUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrioritiesToTasks = await ctx.prisma.prioritiesToTasks.update(input);
      return updateOnePrioritiesToTasks;
    }),
  upsertOnePrioritiesToTasks: publicProcedure
    .input(PrioritiesToTasksUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrioritiesToTasks = await ctx.prisma.prioritiesToTasks.upsert(input);
      return upsertOnePrioritiesToTasks;
    }),

}) 
