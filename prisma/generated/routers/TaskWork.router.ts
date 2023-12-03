import { t, publicProcedure } from "./helpers/createRouter";
import { TaskWorkAggregateSchema } from "../schemas/aggregateTaskWork.schema";
import { TaskWorkCreateManySchema } from "../schemas/createManyTaskWork.schema";
import { TaskWorkCreateOneSchema } from "../schemas/createOneTaskWork.schema";
import { TaskWorkDeleteManySchema } from "../schemas/deleteManyTaskWork.schema";
import { TaskWorkDeleteOneSchema } from "../schemas/deleteOneTaskWork.schema";
import { TaskWorkFindFirstSchema } from "../schemas/findFirstTaskWork.schema";
import { TaskWorkFindManySchema } from "../schemas/findManyTaskWork.schema";
import { TaskWorkFindUniqueSchema } from "../schemas/findUniqueTaskWork.schema";
import { TaskWorkGroupBySchema } from "../schemas/groupByTaskWork.schema";
import { TaskWorkUpdateManySchema } from "../schemas/updateManyTaskWork.schema";
import { TaskWorkUpdateOneSchema } from "../schemas/updateOneTaskWork.schema";
import { TaskWorkUpsertSchema } from "../schemas/upsertOneTaskWork.schema";

export const taskworksRouter = t.router({
  aggregateTaskWork: publicProcedure
    .input(TaskWorkAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateTaskWork = await ctx.prisma.taskWork.aggregate(input);
      return aggregateTaskWork;
    }),
  createManyTaskWork: publicProcedure
    .input(TaskWorkCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyTaskWork = await ctx.prisma.taskWork.createMany(input);
      return createManyTaskWork;
    }),
  createOneTaskWork: publicProcedure
    .input(TaskWorkCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneTaskWork = await ctx.prisma.taskWork.create(input);
      return createOneTaskWork;
    }),
  deleteManyTaskWork: publicProcedure
    .input(TaskWorkDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyTaskWork = await ctx.prisma.taskWork.deleteMany(input);
      return deleteManyTaskWork;
    }),
  deleteOneTaskWork: publicProcedure
    .input(TaskWorkDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneTaskWork = await ctx.prisma.taskWork.delete(input);
      return deleteOneTaskWork;
    }),
  findFirstTaskWork: publicProcedure
    .input(TaskWorkFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTaskWork = await ctx.prisma.taskWork.findFirst(input);
      return findFirstTaskWork;
    }),
  findFirstTaskWorkOrThrow: publicProcedure
    .input(TaskWorkFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTaskWorkOrThrow = await ctx.prisma.taskWork.findFirstOrThrow(input);
      return findFirstTaskWorkOrThrow;
    }),
  findManyTaskWork: publicProcedure
    .input(TaskWorkFindManySchema).query(async ({ ctx, input }) => {
      const findManyTaskWork = await ctx.prisma.taskWork.findMany(input);
      return findManyTaskWork;
    }),
  findUniqueTaskWork: publicProcedure
    .input(TaskWorkFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTaskWork = await ctx.prisma.taskWork.findUnique(input);
      return findUniqueTaskWork;
    }),
  findUniqueTaskWorkOrThrow: publicProcedure
    .input(TaskWorkFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTaskWorkOrThrow = await ctx.prisma.taskWork.findUniqueOrThrow(input);
      return findUniqueTaskWorkOrThrow;
    }),
  groupByTaskWork: publicProcedure
    .input(TaskWorkGroupBySchema).query(async ({ ctx, input }) => {
      const groupByTaskWork = await ctx.prisma.taskWork.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTaskWork;
    }),
  updateManyTaskWork: publicProcedure
    .input(TaskWorkUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyTaskWork = await ctx.prisma.taskWork.updateMany(input);
      return updateManyTaskWork;
    }),
  updateOneTaskWork: publicProcedure
    .input(TaskWorkUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneTaskWork = await ctx.prisma.taskWork.update(input);
      return updateOneTaskWork;
    }),
  upsertOneTaskWork: publicProcedure
    .input(TaskWorkUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneTaskWork = await ctx.prisma.taskWork.upsert(input);
      return upsertOneTaskWork;
    }),

}) 
