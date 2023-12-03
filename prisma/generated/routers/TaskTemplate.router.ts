import { t, publicProcedure } from "./helpers/createRouter";
import { TaskTemplateAggregateSchema } from "../schemas/aggregateTaskTemplate.schema";
import { TaskTemplateCreateManySchema } from "../schemas/createManyTaskTemplate.schema";
import { TaskTemplateCreateOneSchema } from "../schemas/createOneTaskTemplate.schema";
import { TaskTemplateDeleteManySchema } from "../schemas/deleteManyTaskTemplate.schema";
import { TaskTemplateDeleteOneSchema } from "../schemas/deleteOneTaskTemplate.schema";
import { TaskTemplateFindFirstSchema } from "../schemas/findFirstTaskTemplate.schema";
import { TaskTemplateFindManySchema } from "../schemas/findManyTaskTemplate.schema";
import { TaskTemplateFindUniqueSchema } from "../schemas/findUniqueTaskTemplate.schema";
import { TaskTemplateGroupBySchema } from "../schemas/groupByTaskTemplate.schema";
import { TaskTemplateUpdateManySchema } from "../schemas/updateManyTaskTemplate.schema";
import { TaskTemplateUpdateOneSchema } from "../schemas/updateOneTaskTemplate.schema";
import { TaskTemplateUpsertSchema } from "../schemas/upsertOneTaskTemplate.schema";

export const tasktemplatesRouter = t.router({
  aggregateTaskTemplate: publicProcedure
    .input(TaskTemplateAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateTaskTemplate = await ctx.prisma.taskTemplate.aggregate(input);
      return aggregateTaskTemplate;
    }),
  createManyTaskTemplate: publicProcedure
    .input(TaskTemplateCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyTaskTemplate = await ctx.prisma.taskTemplate.createMany(input);
      return createManyTaskTemplate;
    }),
  createOneTaskTemplate: publicProcedure
    .input(TaskTemplateCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneTaskTemplate = await ctx.prisma.taskTemplate.create(input);
      return createOneTaskTemplate;
    }),
  deleteManyTaskTemplate: publicProcedure
    .input(TaskTemplateDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyTaskTemplate = await ctx.prisma.taskTemplate.deleteMany(input);
      return deleteManyTaskTemplate;
    }),
  deleteOneTaskTemplate: publicProcedure
    .input(TaskTemplateDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneTaskTemplate = await ctx.prisma.taskTemplate.delete(input);
      return deleteOneTaskTemplate;
    }),
  findFirstTaskTemplate: publicProcedure
    .input(TaskTemplateFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTaskTemplate = await ctx.prisma.taskTemplate.findFirst(input);
      return findFirstTaskTemplate;
    }),
  findFirstTaskTemplateOrThrow: publicProcedure
    .input(TaskTemplateFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTaskTemplateOrThrow = await ctx.prisma.taskTemplate.findFirstOrThrow(input);
      return findFirstTaskTemplateOrThrow;
    }),
  findManyTaskTemplate: publicProcedure
    .input(TaskTemplateFindManySchema).query(async ({ ctx, input }) => {
      const findManyTaskTemplate = await ctx.prisma.taskTemplate.findMany(input);
      return findManyTaskTemplate;
    }),
  findUniqueTaskTemplate: publicProcedure
    .input(TaskTemplateFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTaskTemplate = await ctx.prisma.taskTemplate.findUnique(input);
      return findUniqueTaskTemplate;
    }),
  findUniqueTaskTemplateOrThrow: publicProcedure
    .input(TaskTemplateFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTaskTemplateOrThrow = await ctx.prisma.taskTemplate.findUniqueOrThrow(input);
      return findUniqueTaskTemplateOrThrow;
    }),
  groupByTaskTemplate: publicProcedure
    .input(TaskTemplateGroupBySchema).query(async ({ ctx, input }) => {
      const groupByTaskTemplate = await ctx.prisma.taskTemplate.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTaskTemplate;
    }),
  updateManyTaskTemplate: publicProcedure
    .input(TaskTemplateUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyTaskTemplate = await ctx.prisma.taskTemplate.updateMany(input);
      return updateManyTaskTemplate;
    }),
  updateOneTaskTemplate: publicProcedure
    .input(TaskTemplateUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneTaskTemplate = await ctx.prisma.taskTemplate.update(input);
      return updateOneTaskTemplate;
    }),
  upsertOneTaskTemplate: publicProcedure
    .input(TaskTemplateUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneTaskTemplate = await ctx.prisma.taskTemplate.upsert(input);
      return upsertOneTaskTemplate;
    }),

}) 
