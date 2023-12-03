import { t, publicProcedure } from "./helpers/createRouter";
import { TaskTemplateLinkAggregateSchema } from "../schemas/aggregateTaskTemplateLink.schema";
import { TaskTemplateLinkCreateManySchema } from "../schemas/createManyTaskTemplateLink.schema";
import { TaskTemplateLinkCreateOneSchema } from "../schemas/createOneTaskTemplateLink.schema";
import { TaskTemplateLinkDeleteManySchema } from "../schemas/deleteManyTaskTemplateLink.schema";
import { TaskTemplateLinkDeleteOneSchema } from "../schemas/deleteOneTaskTemplateLink.schema";
import { TaskTemplateLinkFindFirstSchema } from "../schemas/findFirstTaskTemplateLink.schema";
import { TaskTemplateLinkFindManySchema } from "../schemas/findManyTaskTemplateLink.schema";
import { TaskTemplateLinkFindUniqueSchema } from "../schemas/findUniqueTaskTemplateLink.schema";
import { TaskTemplateLinkGroupBySchema } from "../schemas/groupByTaskTemplateLink.schema";
import { TaskTemplateLinkUpdateManySchema } from "../schemas/updateManyTaskTemplateLink.schema";
import { TaskTemplateLinkUpdateOneSchema } from "../schemas/updateOneTaskTemplateLink.schema";
import { TaskTemplateLinkUpsertSchema } from "../schemas/upsertOneTaskTemplateLink.schema";

export const tasktemplatelinksRouter = t.router({
  aggregateTaskTemplateLink: publicProcedure
    .input(TaskTemplateLinkAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateTaskTemplateLink = await ctx.prisma.taskTemplateLink.aggregate(input);
      return aggregateTaskTemplateLink;
    }),
  createManyTaskTemplateLink: publicProcedure
    .input(TaskTemplateLinkCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyTaskTemplateLink = await ctx.prisma.taskTemplateLink.createMany(input);
      return createManyTaskTemplateLink;
    }),
  createOneTaskTemplateLink: publicProcedure
    .input(TaskTemplateLinkCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneTaskTemplateLink = await ctx.prisma.taskTemplateLink.create(input);
      return createOneTaskTemplateLink;
    }),
  deleteManyTaskTemplateLink: publicProcedure
    .input(TaskTemplateLinkDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyTaskTemplateLink = await ctx.prisma.taskTemplateLink.deleteMany(input);
      return deleteManyTaskTemplateLink;
    }),
  deleteOneTaskTemplateLink: publicProcedure
    .input(TaskTemplateLinkDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneTaskTemplateLink = await ctx.prisma.taskTemplateLink.delete(input);
      return deleteOneTaskTemplateLink;
    }),
  findFirstTaskTemplateLink: publicProcedure
    .input(TaskTemplateLinkFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTaskTemplateLink = await ctx.prisma.taskTemplateLink.findFirst(input);
      return findFirstTaskTemplateLink;
    }),
  findFirstTaskTemplateLinkOrThrow: publicProcedure
    .input(TaskTemplateLinkFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTaskTemplateLinkOrThrow = await ctx.prisma.taskTemplateLink.findFirstOrThrow(input);
      return findFirstTaskTemplateLinkOrThrow;
    }),
  findManyTaskTemplateLink: publicProcedure
    .input(TaskTemplateLinkFindManySchema).query(async ({ ctx, input }) => {
      const findManyTaskTemplateLink = await ctx.prisma.taskTemplateLink.findMany(input);
      return findManyTaskTemplateLink;
    }),
  findUniqueTaskTemplateLink: publicProcedure
    .input(TaskTemplateLinkFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTaskTemplateLink = await ctx.prisma.taskTemplateLink.findUnique(input);
      return findUniqueTaskTemplateLink;
    }),
  findUniqueTaskTemplateLinkOrThrow: publicProcedure
    .input(TaskTemplateLinkFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTaskTemplateLinkOrThrow = await ctx.prisma.taskTemplateLink.findUniqueOrThrow(input);
      return findUniqueTaskTemplateLinkOrThrow;
    }),
  groupByTaskTemplateLink: publicProcedure
    .input(TaskTemplateLinkGroupBySchema).query(async ({ ctx, input }) => {
      const groupByTaskTemplateLink = await ctx.prisma.taskTemplateLink.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTaskTemplateLink;
    }),
  updateManyTaskTemplateLink: publicProcedure
    .input(TaskTemplateLinkUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyTaskTemplateLink = await ctx.prisma.taskTemplateLink.updateMany(input);
      return updateManyTaskTemplateLink;
    }),
  updateOneTaskTemplateLink: publicProcedure
    .input(TaskTemplateLinkUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneTaskTemplateLink = await ctx.prisma.taskTemplateLink.update(input);
      return updateOneTaskTemplateLink;
    }),
  upsertOneTaskTemplateLink: publicProcedure
    .input(TaskTemplateLinkUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneTaskTemplateLink = await ctx.prisma.taskTemplateLink.upsert(input);
      return upsertOneTaskTemplateLink;
    }),

}) 
