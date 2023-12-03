import { t, publicProcedure } from "./helpers/createRouter";
import { ProjectTemplatesToTagsAggregateSchema } from "../schemas/aggregateProjectTemplatesToTags.schema";
import { ProjectTemplatesToTagsCreateManySchema } from "../schemas/createManyProjectTemplatesToTags.schema";
import { ProjectTemplatesToTagsCreateOneSchema } from "../schemas/createOneProjectTemplatesToTags.schema";
import { ProjectTemplatesToTagsDeleteManySchema } from "../schemas/deleteManyProjectTemplatesToTags.schema";
import { ProjectTemplatesToTagsDeleteOneSchema } from "../schemas/deleteOneProjectTemplatesToTags.schema";
import { ProjectTemplatesToTagsFindFirstSchema } from "../schemas/findFirstProjectTemplatesToTags.schema";
import { ProjectTemplatesToTagsFindManySchema } from "../schemas/findManyProjectTemplatesToTags.schema";
import { ProjectTemplatesToTagsFindUniqueSchema } from "../schemas/findUniqueProjectTemplatesToTags.schema";
import { ProjectTemplatesToTagsGroupBySchema } from "../schemas/groupByProjectTemplatesToTags.schema";
import { ProjectTemplatesToTagsUpdateManySchema } from "../schemas/updateManyProjectTemplatesToTags.schema";
import { ProjectTemplatesToTagsUpdateOneSchema } from "../schemas/updateOneProjectTemplatesToTags.schema";
import { ProjectTemplatesToTagsUpsertSchema } from "../schemas/upsertOneProjectTemplatesToTags.schema";

export const projecttemplatestotagsRouter = t.router({
  aggregateProjectTemplatesToTags: publicProcedure
    .input(ProjectTemplatesToTagsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateProjectTemplatesToTags = await ctx.prisma.projectTemplatesToTags.aggregate(input);
      return aggregateProjectTemplatesToTags;
    }),
  createManyProjectTemplatesToTags: publicProcedure
    .input(ProjectTemplatesToTagsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyProjectTemplatesToTags = await ctx.prisma.projectTemplatesToTags.createMany(input);
      return createManyProjectTemplatesToTags;
    }),
  createOneProjectTemplatesToTags: publicProcedure
    .input(ProjectTemplatesToTagsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneProjectTemplatesToTags = await ctx.prisma.projectTemplatesToTags.create(input);
      return createOneProjectTemplatesToTags;
    }),
  deleteManyProjectTemplatesToTags: publicProcedure
    .input(ProjectTemplatesToTagsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyProjectTemplatesToTags = await ctx.prisma.projectTemplatesToTags.deleteMany(input);
      return deleteManyProjectTemplatesToTags;
    }),
  deleteOneProjectTemplatesToTags: publicProcedure
    .input(ProjectTemplatesToTagsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneProjectTemplatesToTags = await ctx.prisma.projectTemplatesToTags.delete(input);
      return deleteOneProjectTemplatesToTags;
    }),
  findFirstProjectTemplatesToTags: publicProcedure
    .input(ProjectTemplatesToTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstProjectTemplatesToTags = await ctx.prisma.projectTemplatesToTags.findFirst(input);
      return findFirstProjectTemplatesToTags;
    }),
  findFirstProjectTemplatesToTagsOrThrow: publicProcedure
    .input(ProjectTemplatesToTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstProjectTemplatesToTagsOrThrow = await ctx.prisma.projectTemplatesToTags.findFirstOrThrow(input);
      return findFirstProjectTemplatesToTagsOrThrow;
    }),
  findManyProjectTemplatesToTags: publicProcedure
    .input(ProjectTemplatesToTagsFindManySchema).query(async ({ ctx, input }) => {
      const findManyProjectTemplatesToTags = await ctx.prisma.projectTemplatesToTags.findMany(input);
      return findManyProjectTemplatesToTags;
    }),
  findUniqueProjectTemplatesToTags: publicProcedure
    .input(ProjectTemplatesToTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueProjectTemplatesToTags = await ctx.prisma.projectTemplatesToTags.findUnique(input);
      return findUniqueProjectTemplatesToTags;
    }),
  findUniqueProjectTemplatesToTagsOrThrow: publicProcedure
    .input(ProjectTemplatesToTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueProjectTemplatesToTagsOrThrow = await ctx.prisma.projectTemplatesToTags.findUniqueOrThrow(input);
      return findUniqueProjectTemplatesToTagsOrThrow;
    }),
  groupByProjectTemplatesToTags: publicProcedure
    .input(ProjectTemplatesToTagsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByProjectTemplatesToTags = await ctx.prisma.projectTemplatesToTags.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByProjectTemplatesToTags;
    }),
  updateManyProjectTemplatesToTags: publicProcedure
    .input(ProjectTemplatesToTagsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyProjectTemplatesToTags = await ctx.prisma.projectTemplatesToTags.updateMany(input);
      return updateManyProjectTemplatesToTags;
    }),
  updateOneProjectTemplatesToTags: publicProcedure
    .input(ProjectTemplatesToTagsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneProjectTemplatesToTags = await ctx.prisma.projectTemplatesToTags.update(input);
      return updateOneProjectTemplatesToTags;
    }),
  upsertOneProjectTemplatesToTags: publicProcedure
    .input(ProjectTemplatesToTagsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneProjectTemplatesToTags = await ctx.prisma.projectTemplatesToTags.upsert(input);
      return upsertOneProjectTemplatesToTags;
    }),

}) 
