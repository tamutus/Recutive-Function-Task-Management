import { t, publicProcedure } from "./helpers/createRouter";
import { PrivateEnergiesToTasksAggregateSchema } from "../schemas/aggregatePrivateEnergiesToTasks.schema";
import { PrivateEnergiesToTasksCreateManySchema } from "../schemas/createManyPrivateEnergiesToTasks.schema";
import { PrivateEnergiesToTasksCreateOneSchema } from "../schemas/createOnePrivateEnergiesToTasks.schema";
import { PrivateEnergiesToTasksDeleteManySchema } from "../schemas/deleteManyPrivateEnergiesToTasks.schema";
import { PrivateEnergiesToTasksDeleteOneSchema } from "../schemas/deleteOnePrivateEnergiesToTasks.schema";
import { PrivateEnergiesToTasksFindFirstSchema } from "../schemas/findFirstPrivateEnergiesToTasks.schema";
import { PrivateEnergiesToTasksFindManySchema } from "../schemas/findManyPrivateEnergiesToTasks.schema";
import { PrivateEnergiesToTasksFindUniqueSchema } from "../schemas/findUniquePrivateEnergiesToTasks.schema";
import { PrivateEnergiesToTasksGroupBySchema } from "../schemas/groupByPrivateEnergiesToTasks.schema";
import { PrivateEnergiesToTasksUpdateManySchema } from "../schemas/updateManyPrivateEnergiesToTasks.schema";
import { PrivateEnergiesToTasksUpdateOneSchema } from "../schemas/updateOnePrivateEnergiesToTasks.schema";
import { PrivateEnergiesToTasksUpsertSchema } from "../schemas/upsertOnePrivateEnergiesToTasks.schema";

export const privateenergiestotasksRouter = t.router({
  aggregatePrivateEnergiesToTasks: publicProcedure
    .input(PrivateEnergiesToTasksAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrivateEnergiesToTasks = await ctx.prisma.privateEnergiesToTasks.aggregate(input);
      return aggregatePrivateEnergiesToTasks;
    }),
  createManyPrivateEnergiesToTasks: publicProcedure
    .input(PrivateEnergiesToTasksCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrivateEnergiesToTasks = await ctx.prisma.privateEnergiesToTasks.createMany(input);
      return createManyPrivateEnergiesToTasks;
    }),
  createOnePrivateEnergiesToTasks: publicProcedure
    .input(PrivateEnergiesToTasksCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrivateEnergiesToTasks = await ctx.prisma.privateEnergiesToTasks.create(input);
      return createOnePrivateEnergiesToTasks;
    }),
  deleteManyPrivateEnergiesToTasks: publicProcedure
    .input(PrivateEnergiesToTasksDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrivateEnergiesToTasks = await ctx.prisma.privateEnergiesToTasks.deleteMany(input);
      return deleteManyPrivateEnergiesToTasks;
    }),
  deleteOnePrivateEnergiesToTasks: publicProcedure
    .input(PrivateEnergiesToTasksDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrivateEnergiesToTasks = await ctx.prisma.privateEnergiesToTasks.delete(input);
      return deleteOnePrivateEnergiesToTasks;
    }),
  findFirstPrivateEnergiesToTasks: publicProcedure
    .input(PrivateEnergiesToTasksFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateEnergiesToTasks = await ctx.prisma.privateEnergiesToTasks.findFirst(input);
      return findFirstPrivateEnergiesToTasks;
    }),
  findFirstPrivateEnergiesToTasksOrThrow: publicProcedure
    .input(PrivateEnergiesToTasksFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateEnergiesToTasksOrThrow = await ctx.prisma.privateEnergiesToTasks.findFirstOrThrow(input);
      return findFirstPrivateEnergiesToTasksOrThrow;
    }),
  findManyPrivateEnergiesToTasks: publicProcedure
    .input(PrivateEnergiesToTasksFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrivateEnergiesToTasks = await ctx.prisma.privateEnergiesToTasks.findMany(input);
      return findManyPrivateEnergiesToTasks;
    }),
  findUniquePrivateEnergiesToTasks: publicProcedure
    .input(PrivateEnergiesToTasksFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateEnergiesToTasks = await ctx.prisma.privateEnergiesToTasks.findUnique(input);
      return findUniquePrivateEnergiesToTasks;
    }),
  findUniquePrivateEnergiesToTasksOrThrow: publicProcedure
    .input(PrivateEnergiesToTasksFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateEnergiesToTasksOrThrow = await ctx.prisma.privateEnergiesToTasks.findUniqueOrThrow(input);
      return findUniquePrivateEnergiesToTasksOrThrow;
    }),
  groupByPrivateEnergiesToTasks: publicProcedure
    .input(PrivateEnergiesToTasksGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrivateEnergiesToTasks = await ctx.prisma.privateEnergiesToTasks.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrivateEnergiesToTasks;
    }),
  updateManyPrivateEnergiesToTasks: publicProcedure
    .input(PrivateEnergiesToTasksUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrivateEnergiesToTasks = await ctx.prisma.privateEnergiesToTasks.updateMany(input);
      return updateManyPrivateEnergiesToTasks;
    }),
  updateOnePrivateEnergiesToTasks: publicProcedure
    .input(PrivateEnergiesToTasksUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrivateEnergiesToTasks = await ctx.prisma.privateEnergiesToTasks.update(input);
      return updateOnePrivateEnergiesToTasks;
    }),
  upsertOnePrivateEnergiesToTasks: publicProcedure
    .input(PrivateEnergiesToTasksUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrivateEnergiesToTasks = await ctx.prisma.privateEnergiesToTasks.upsert(input);
      return upsertOnePrivateEnergiesToTasks;
    }),

}) 
