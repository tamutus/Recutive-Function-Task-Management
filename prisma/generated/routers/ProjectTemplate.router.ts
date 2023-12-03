import { t, publicProcedure } from "./helpers/createRouter";
import { ProjectTemplateAggregateSchema } from "../schemas/aggregateProjectTemplate.schema";
import { ProjectTemplateCreateManySchema } from "../schemas/createManyProjectTemplate.schema";
import { ProjectTemplateCreateOneSchema } from "../schemas/createOneProjectTemplate.schema";
import { ProjectTemplateDeleteManySchema } from "../schemas/deleteManyProjectTemplate.schema";
import { ProjectTemplateDeleteOneSchema } from "../schemas/deleteOneProjectTemplate.schema";
import { ProjectTemplateFindFirstSchema } from "../schemas/findFirstProjectTemplate.schema";
import { ProjectTemplateFindManySchema } from "../schemas/findManyProjectTemplate.schema";
import { ProjectTemplateFindUniqueSchema } from "../schemas/findUniqueProjectTemplate.schema";
import { ProjectTemplateGroupBySchema } from "../schemas/groupByProjectTemplate.schema";
import { ProjectTemplateUpdateManySchema } from "../schemas/updateManyProjectTemplate.schema";
import { ProjectTemplateUpdateOneSchema } from "../schemas/updateOneProjectTemplate.schema";
import { ProjectTemplateUpsertSchema } from "../schemas/upsertOneProjectTemplate.schema";

export const projecttemplatesRouter = t.router({
  aggregateProjectTemplate: publicProcedure
    .input(ProjectTemplateAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateProjectTemplate = await ctx.prisma.projectTemplate.aggregate(input);
      return aggregateProjectTemplate;
    }),
  createManyProjectTemplate: publicProcedure
    .input(ProjectTemplateCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyProjectTemplate = await ctx.prisma.projectTemplate.createMany(input);
      return createManyProjectTemplate;
    }),
  createOneProjectTemplate: publicProcedure
    .input(ProjectTemplateCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneProjectTemplate = await ctx.prisma.projectTemplate.create(input);
      return createOneProjectTemplate;
    }),
  deleteManyProjectTemplate: publicProcedure
    .input(ProjectTemplateDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyProjectTemplate = await ctx.prisma.projectTemplate.deleteMany(input);
      return deleteManyProjectTemplate;
    }),
  deleteOneProjectTemplate: publicProcedure
    .input(ProjectTemplateDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneProjectTemplate = await ctx.prisma.projectTemplate.delete(input);
      return deleteOneProjectTemplate;
    }),
  findFirstProjectTemplate: publicProcedure
    .input(ProjectTemplateFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstProjectTemplate = await ctx.prisma.projectTemplate.findFirst(input);
      return findFirstProjectTemplate;
    }),
  findFirstProjectTemplateOrThrow: publicProcedure
    .input(ProjectTemplateFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstProjectTemplateOrThrow = await ctx.prisma.projectTemplate.findFirstOrThrow(input);
      return findFirstProjectTemplateOrThrow;
    }),
  findManyProjectTemplate: publicProcedure
    .input(ProjectTemplateFindManySchema).query(async ({ ctx, input }) => {
      const findManyProjectTemplate = await ctx.prisma.projectTemplate.findMany(input);
      return findManyProjectTemplate;
    }),
  findUniqueProjectTemplate: publicProcedure
    .input(ProjectTemplateFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueProjectTemplate = await ctx.prisma.projectTemplate.findUnique(input);
      return findUniqueProjectTemplate;
    }),
  findUniqueProjectTemplateOrThrow: publicProcedure
    .input(ProjectTemplateFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueProjectTemplateOrThrow = await ctx.prisma.projectTemplate.findUniqueOrThrow(input);
      return findUniqueProjectTemplateOrThrow;
    }),
  groupByProjectTemplate: publicProcedure
    .input(ProjectTemplateGroupBySchema).query(async ({ ctx, input }) => {
      const groupByProjectTemplate = await ctx.prisma.projectTemplate.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByProjectTemplate;
    }),
  updateManyProjectTemplate: publicProcedure
    .input(ProjectTemplateUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyProjectTemplate = await ctx.prisma.projectTemplate.updateMany(input);
      return updateManyProjectTemplate;
    }),
  updateOneProjectTemplate: publicProcedure
    .input(ProjectTemplateUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneProjectTemplate = await ctx.prisma.projectTemplate.update(input);
      return updateOneProjectTemplate;
    }),
  upsertOneProjectTemplate: publicProcedure
    .input(ProjectTemplateUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneProjectTemplate = await ctx.prisma.projectTemplate.upsert(input);
      return upsertOneProjectTemplate;
    }),

}) 
