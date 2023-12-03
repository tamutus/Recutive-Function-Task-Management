import { t, publicProcedure } from "./helpers/createRouter";
import { ProjectTemplatesToTaskTemplatesAggregateSchema } from "../schemas/aggregateProjectTemplatesToTaskTemplates.schema";
import { ProjectTemplatesToTaskTemplatesCreateManySchema } from "../schemas/createManyProjectTemplatesToTaskTemplates.schema";
import { ProjectTemplatesToTaskTemplatesCreateOneSchema } from "../schemas/createOneProjectTemplatesToTaskTemplates.schema";
import { ProjectTemplatesToTaskTemplatesDeleteManySchema } from "../schemas/deleteManyProjectTemplatesToTaskTemplates.schema";
import { ProjectTemplatesToTaskTemplatesDeleteOneSchema } from "../schemas/deleteOneProjectTemplatesToTaskTemplates.schema";
import { ProjectTemplatesToTaskTemplatesFindFirstSchema } from "../schemas/findFirstProjectTemplatesToTaskTemplates.schema";
import { ProjectTemplatesToTaskTemplatesFindManySchema } from "../schemas/findManyProjectTemplatesToTaskTemplates.schema";
import { ProjectTemplatesToTaskTemplatesFindUniqueSchema } from "../schemas/findUniqueProjectTemplatesToTaskTemplates.schema";
import { ProjectTemplatesToTaskTemplatesGroupBySchema } from "../schemas/groupByProjectTemplatesToTaskTemplates.schema";
import { ProjectTemplatesToTaskTemplatesUpdateManySchema } from "../schemas/updateManyProjectTemplatesToTaskTemplates.schema";
import { ProjectTemplatesToTaskTemplatesUpdateOneSchema } from "../schemas/updateOneProjectTemplatesToTaskTemplates.schema";
import { ProjectTemplatesToTaskTemplatesUpsertSchema } from "../schemas/upsertOneProjectTemplatesToTaskTemplates.schema";

export const projecttemplatestotasktemplatesRouter = t.router({
  aggregateProjectTemplatesToTaskTemplates: publicProcedure
    .input(ProjectTemplatesToTaskTemplatesAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateProjectTemplatesToTaskTemplates = await ctx.prisma.projectTemplatesToTaskTemplates.aggregate(input);
      return aggregateProjectTemplatesToTaskTemplates;
    }),
  createManyProjectTemplatesToTaskTemplates: publicProcedure
    .input(ProjectTemplatesToTaskTemplatesCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyProjectTemplatesToTaskTemplates = await ctx.prisma.projectTemplatesToTaskTemplates.createMany(input);
      return createManyProjectTemplatesToTaskTemplates;
    }),
  createOneProjectTemplatesToTaskTemplates: publicProcedure
    .input(ProjectTemplatesToTaskTemplatesCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneProjectTemplatesToTaskTemplates = await ctx.prisma.projectTemplatesToTaskTemplates.create(input);
      return createOneProjectTemplatesToTaskTemplates;
    }),
  deleteManyProjectTemplatesToTaskTemplates: publicProcedure
    .input(ProjectTemplatesToTaskTemplatesDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyProjectTemplatesToTaskTemplates = await ctx.prisma.projectTemplatesToTaskTemplates.deleteMany(input);
      return deleteManyProjectTemplatesToTaskTemplates;
    }),
  deleteOneProjectTemplatesToTaskTemplates: publicProcedure
    .input(ProjectTemplatesToTaskTemplatesDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneProjectTemplatesToTaskTemplates = await ctx.prisma.projectTemplatesToTaskTemplates.delete(input);
      return deleteOneProjectTemplatesToTaskTemplates;
    }),
  findFirstProjectTemplatesToTaskTemplates: publicProcedure
    .input(ProjectTemplatesToTaskTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstProjectTemplatesToTaskTemplates = await ctx.prisma.projectTemplatesToTaskTemplates.findFirst(input);
      return findFirstProjectTemplatesToTaskTemplates;
    }),
  findFirstProjectTemplatesToTaskTemplatesOrThrow: publicProcedure
    .input(ProjectTemplatesToTaskTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstProjectTemplatesToTaskTemplatesOrThrow = await ctx.prisma.projectTemplatesToTaskTemplates.findFirstOrThrow(input);
      return findFirstProjectTemplatesToTaskTemplatesOrThrow;
    }),
  findManyProjectTemplatesToTaskTemplates: publicProcedure
    .input(ProjectTemplatesToTaskTemplatesFindManySchema).query(async ({ ctx, input }) => {
      const findManyProjectTemplatesToTaskTemplates = await ctx.prisma.projectTemplatesToTaskTemplates.findMany(input);
      return findManyProjectTemplatesToTaskTemplates;
    }),
  findUniqueProjectTemplatesToTaskTemplates: publicProcedure
    .input(ProjectTemplatesToTaskTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueProjectTemplatesToTaskTemplates = await ctx.prisma.projectTemplatesToTaskTemplates.findUnique(input);
      return findUniqueProjectTemplatesToTaskTemplates;
    }),
  findUniqueProjectTemplatesToTaskTemplatesOrThrow: publicProcedure
    .input(ProjectTemplatesToTaskTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueProjectTemplatesToTaskTemplatesOrThrow = await ctx.prisma.projectTemplatesToTaskTemplates.findUniqueOrThrow(input);
      return findUniqueProjectTemplatesToTaskTemplatesOrThrow;
    }),
  groupByProjectTemplatesToTaskTemplates: publicProcedure
    .input(ProjectTemplatesToTaskTemplatesGroupBySchema).query(async ({ ctx, input }) => {
      const groupByProjectTemplatesToTaskTemplates = await ctx.prisma.projectTemplatesToTaskTemplates.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByProjectTemplatesToTaskTemplates;
    }),
  updateManyProjectTemplatesToTaskTemplates: publicProcedure
    .input(ProjectTemplatesToTaskTemplatesUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyProjectTemplatesToTaskTemplates = await ctx.prisma.projectTemplatesToTaskTemplates.updateMany(input);
      return updateManyProjectTemplatesToTaskTemplates;
    }),
  updateOneProjectTemplatesToTaskTemplates: publicProcedure
    .input(ProjectTemplatesToTaskTemplatesUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneProjectTemplatesToTaskTemplates = await ctx.prisma.projectTemplatesToTaskTemplates.update(input);
      return updateOneProjectTemplatesToTaskTemplates;
    }),
  upsertOneProjectTemplatesToTaskTemplates: publicProcedure
    .input(ProjectTemplatesToTaskTemplatesUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneProjectTemplatesToTaskTemplates = await ctx.prisma.projectTemplatesToTaskTemplates.upsert(input);
      return upsertOneProjectTemplatesToTaskTemplates;
    }),

}) 
