import { t, publicProcedure } from "./helpers/createRouter";
import { EnergiesToTasksAggregateSchema } from "../schemas/aggregateEnergiesToTasks.schema";
import { EnergiesToTasksCreateManySchema } from "../schemas/createManyEnergiesToTasks.schema";
import { EnergiesToTasksCreateOneSchema } from "../schemas/createOneEnergiesToTasks.schema";
import { EnergiesToTasksDeleteManySchema } from "../schemas/deleteManyEnergiesToTasks.schema";
import { EnergiesToTasksDeleteOneSchema } from "../schemas/deleteOneEnergiesToTasks.schema";
import { EnergiesToTasksFindFirstSchema } from "../schemas/findFirstEnergiesToTasks.schema";
import { EnergiesToTasksFindManySchema } from "../schemas/findManyEnergiesToTasks.schema";
import { EnergiesToTasksFindUniqueSchema } from "../schemas/findUniqueEnergiesToTasks.schema";
import { EnergiesToTasksGroupBySchema } from "../schemas/groupByEnergiesToTasks.schema";
import { EnergiesToTasksUpdateManySchema } from "../schemas/updateManyEnergiesToTasks.schema";
import { EnergiesToTasksUpdateOneSchema } from "../schemas/updateOneEnergiesToTasks.schema";
import { EnergiesToTasksUpsertSchema } from "../schemas/upsertOneEnergiesToTasks.schema";

export const energiestotasksRouter = t.router({
  aggregateEnergiesToTasks: publicProcedure
    .input(EnergiesToTasksAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateEnergiesToTasks = await ctx.prisma.energiesToTasks.aggregate(input);
      return aggregateEnergiesToTasks;
    }),
  createManyEnergiesToTasks: publicProcedure
    .input(EnergiesToTasksCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyEnergiesToTasks = await ctx.prisma.energiesToTasks.createMany(input);
      return createManyEnergiesToTasks;
    }),
  createOneEnergiesToTasks: publicProcedure
    .input(EnergiesToTasksCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneEnergiesToTasks = await ctx.prisma.energiesToTasks.create(input);
      return createOneEnergiesToTasks;
    }),
  deleteManyEnergiesToTasks: publicProcedure
    .input(EnergiesToTasksDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyEnergiesToTasks = await ctx.prisma.energiesToTasks.deleteMany(input);
      return deleteManyEnergiesToTasks;
    }),
  deleteOneEnergiesToTasks: publicProcedure
    .input(EnergiesToTasksDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneEnergiesToTasks = await ctx.prisma.energiesToTasks.delete(input);
      return deleteOneEnergiesToTasks;
    }),
  findFirstEnergiesToTasks: publicProcedure
    .input(EnergiesToTasksFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergiesToTasks = await ctx.prisma.energiesToTasks.findFirst(input);
      return findFirstEnergiesToTasks;
    }),
  findFirstEnergiesToTasksOrThrow: publicProcedure
    .input(EnergiesToTasksFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergiesToTasksOrThrow = await ctx.prisma.energiesToTasks.findFirstOrThrow(input);
      return findFirstEnergiesToTasksOrThrow;
    }),
  findManyEnergiesToTasks: publicProcedure
    .input(EnergiesToTasksFindManySchema).query(async ({ ctx, input }) => {
      const findManyEnergiesToTasks = await ctx.prisma.energiesToTasks.findMany(input);
      return findManyEnergiesToTasks;
    }),
  findUniqueEnergiesToTasks: publicProcedure
    .input(EnergiesToTasksFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergiesToTasks = await ctx.prisma.energiesToTasks.findUnique(input);
      return findUniqueEnergiesToTasks;
    }),
  findUniqueEnergiesToTasksOrThrow: publicProcedure
    .input(EnergiesToTasksFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergiesToTasksOrThrow = await ctx.prisma.energiesToTasks.findUniqueOrThrow(input);
      return findUniqueEnergiesToTasksOrThrow;
    }),
  groupByEnergiesToTasks: publicProcedure
    .input(EnergiesToTasksGroupBySchema).query(async ({ ctx, input }) => {
      const groupByEnergiesToTasks = await ctx.prisma.energiesToTasks.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByEnergiesToTasks;
    }),
  updateManyEnergiesToTasks: publicProcedure
    .input(EnergiesToTasksUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyEnergiesToTasks = await ctx.prisma.energiesToTasks.updateMany(input);
      return updateManyEnergiesToTasks;
    }),
  updateOneEnergiesToTasks: publicProcedure
    .input(EnergiesToTasksUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneEnergiesToTasks = await ctx.prisma.energiesToTasks.update(input);
      return updateOneEnergiesToTasks;
    }),
  upsertOneEnergiesToTasks: publicProcedure
    .input(EnergiesToTasksUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneEnergiesToTasks = await ctx.prisma.energiesToTasks.upsert(input);
      return upsertOneEnergiesToTasks;
    }),

}) 
