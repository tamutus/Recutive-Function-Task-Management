import { t, publicProcedure } from "./helpers/createRouter";
import { TaskLinkAggregateSchema } from "../schemas/aggregateTaskLink.schema";
import { TaskLinkCreateManySchema } from "../schemas/createManyTaskLink.schema";
import { TaskLinkCreateOneSchema } from "../schemas/createOneTaskLink.schema";
import { TaskLinkDeleteManySchema } from "../schemas/deleteManyTaskLink.schema";
import { TaskLinkDeleteOneSchema } from "../schemas/deleteOneTaskLink.schema";
import { TaskLinkFindFirstSchema } from "../schemas/findFirstTaskLink.schema";
import { TaskLinkFindManySchema } from "../schemas/findManyTaskLink.schema";
import { TaskLinkFindUniqueSchema } from "../schemas/findUniqueTaskLink.schema";
import { TaskLinkGroupBySchema } from "../schemas/groupByTaskLink.schema";
import { TaskLinkUpdateManySchema } from "../schemas/updateManyTaskLink.schema";
import { TaskLinkUpdateOneSchema } from "../schemas/updateOneTaskLink.schema";
import { TaskLinkUpsertSchema } from "../schemas/upsertOneTaskLink.schema";

export const tasklinksRouter = t.router({
  aggregateTaskLink: publicProcedure
    .input(TaskLinkAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateTaskLink = await ctx.prisma.taskLink.aggregate(input);
      return aggregateTaskLink;
    }),
  createManyTaskLink: publicProcedure
    .input(TaskLinkCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyTaskLink = await ctx.prisma.taskLink.createMany(input);
      return createManyTaskLink;
    }),
  createOneTaskLink: publicProcedure
    .input(TaskLinkCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneTaskLink = await ctx.prisma.taskLink.create(input);
      return createOneTaskLink;
    }),
  deleteManyTaskLink: publicProcedure
    .input(TaskLinkDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyTaskLink = await ctx.prisma.taskLink.deleteMany(input);
      return deleteManyTaskLink;
    }),
  deleteOneTaskLink: publicProcedure
    .input(TaskLinkDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneTaskLink = await ctx.prisma.taskLink.delete(input);
      return deleteOneTaskLink;
    }),
  findFirstTaskLink: publicProcedure
    .input(TaskLinkFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTaskLink = await ctx.prisma.taskLink.findFirst(input);
      return findFirstTaskLink;
    }),
  findFirstTaskLinkOrThrow: publicProcedure
    .input(TaskLinkFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTaskLinkOrThrow = await ctx.prisma.taskLink.findFirstOrThrow(input);
      return findFirstTaskLinkOrThrow;
    }),
  findManyTaskLink: publicProcedure
    .input(TaskLinkFindManySchema).query(async ({ ctx, input }) => {
      const findManyTaskLink = await ctx.prisma.taskLink.findMany(input);
      return findManyTaskLink;
    }),
  findUniqueTaskLink: publicProcedure
    .input(TaskLinkFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTaskLink = await ctx.prisma.taskLink.findUnique(input);
      return findUniqueTaskLink;
    }),
  findUniqueTaskLinkOrThrow: publicProcedure
    .input(TaskLinkFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTaskLinkOrThrow = await ctx.prisma.taskLink.findUniqueOrThrow(input);
      return findUniqueTaskLinkOrThrow;
    }),
  groupByTaskLink: publicProcedure
    .input(TaskLinkGroupBySchema).query(async ({ ctx, input }) => {
      const groupByTaskLink = await ctx.prisma.taskLink.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTaskLink;
    }),
  updateManyTaskLink: publicProcedure
    .input(TaskLinkUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyTaskLink = await ctx.prisma.taskLink.updateMany(input);
      return updateManyTaskLink;
    }),
  updateOneTaskLink: publicProcedure
    .input(TaskLinkUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneTaskLink = await ctx.prisma.taskLink.update(input);
      return updateOneTaskLink;
    }),
  upsertOneTaskLink: publicProcedure
    .input(TaskLinkUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneTaskLink = await ctx.prisma.taskLink.upsert(input);
      return upsertOneTaskLink;
    }),

}) 
