import { t, publicProcedure } from "./helpers/createRouter";
import { TagsToTaskTemplatesAggregateSchema } from "../schemas/aggregateTagsToTaskTemplates.schema";
import { TagsToTaskTemplatesCreateManySchema } from "../schemas/createManyTagsToTaskTemplates.schema";
import { TagsToTaskTemplatesCreateOneSchema } from "../schemas/createOneTagsToTaskTemplates.schema";
import { TagsToTaskTemplatesDeleteManySchema } from "../schemas/deleteManyTagsToTaskTemplates.schema";
import { TagsToTaskTemplatesDeleteOneSchema } from "../schemas/deleteOneTagsToTaskTemplates.schema";
import { TagsToTaskTemplatesFindFirstSchema } from "../schemas/findFirstTagsToTaskTemplates.schema";
import { TagsToTaskTemplatesFindManySchema } from "../schemas/findManyTagsToTaskTemplates.schema";
import { TagsToTaskTemplatesFindUniqueSchema } from "../schemas/findUniqueTagsToTaskTemplates.schema";
import { TagsToTaskTemplatesGroupBySchema } from "../schemas/groupByTagsToTaskTemplates.schema";
import { TagsToTaskTemplatesUpdateManySchema } from "../schemas/updateManyTagsToTaskTemplates.schema";
import { TagsToTaskTemplatesUpdateOneSchema } from "../schemas/updateOneTagsToTaskTemplates.schema";
import { TagsToTaskTemplatesUpsertSchema } from "../schemas/upsertOneTagsToTaskTemplates.schema";

export const tagstotasktemplatesRouter = t.router({
  aggregateTagsToTaskTemplates: publicProcedure
    .input(TagsToTaskTemplatesAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateTagsToTaskTemplates = await ctx.prisma.tagsToTaskTemplates.aggregate(input);
      return aggregateTagsToTaskTemplates;
    }),
  createManyTagsToTaskTemplates: publicProcedure
    .input(TagsToTaskTemplatesCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyTagsToTaskTemplates = await ctx.prisma.tagsToTaskTemplates.createMany(input);
      return createManyTagsToTaskTemplates;
    }),
  createOneTagsToTaskTemplates: publicProcedure
    .input(TagsToTaskTemplatesCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneTagsToTaskTemplates = await ctx.prisma.tagsToTaskTemplates.create(input);
      return createOneTagsToTaskTemplates;
    }),
  deleteManyTagsToTaskTemplates: publicProcedure
    .input(TagsToTaskTemplatesDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyTagsToTaskTemplates = await ctx.prisma.tagsToTaskTemplates.deleteMany(input);
      return deleteManyTagsToTaskTemplates;
    }),
  deleteOneTagsToTaskTemplates: publicProcedure
    .input(TagsToTaskTemplatesDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneTagsToTaskTemplates = await ctx.prisma.tagsToTaskTemplates.delete(input);
      return deleteOneTagsToTaskTemplates;
    }),
  findFirstTagsToTaskTemplates: publicProcedure
    .input(TagsToTaskTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTagsToTaskTemplates = await ctx.prisma.tagsToTaskTemplates.findFirst(input);
      return findFirstTagsToTaskTemplates;
    }),
  findFirstTagsToTaskTemplatesOrThrow: publicProcedure
    .input(TagsToTaskTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTagsToTaskTemplatesOrThrow = await ctx.prisma.tagsToTaskTemplates.findFirstOrThrow(input);
      return findFirstTagsToTaskTemplatesOrThrow;
    }),
  findManyTagsToTaskTemplates: publicProcedure
    .input(TagsToTaskTemplatesFindManySchema).query(async ({ ctx, input }) => {
      const findManyTagsToTaskTemplates = await ctx.prisma.tagsToTaskTemplates.findMany(input);
      return findManyTagsToTaskTemplates;
    }),
  findUniqueTagsToTaskTemplates: publicProcedure
    .input(TagsToTaskTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTagsToTaskTemplates = await ctx.prisma.tagsToTaskTemplates.findUnique(input);
      return findUniqueTagsToTaskTemplates;
    }),
  findUniqueTagsToTaskTemplatesOrThrow: publicProcedure
    .input(TagsToTaskTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTagsToTaskTemplatesOrThrow = await ctx.prisma.tagsToTaskTemplates.findUniqueOrThrow(input);
      return findUniqueTagsToTaskTemplatesOrThrow;
    }),
  groupByTagsToTaskTemplates: publicProcedure
    .input(TagsToTaskTemplatesGroupBySchema).query(async ({ ctx, input }) => {
      const groupByTagsToTaskTemplates = await ctx.prisma.tagsToTaskTemplates.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTagsToTaskTemplates;
    }),
  updateManyTagsToTaskTemplates: publicProcedure
    .input(TagsToTaskTemplatesUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyTagsToTaskTemplates = await ctx.prisma.tagsToTaskTemplates.updateMany(input);
      return updateManyTagsToTaskTemplates;
    }),
  updateOneTagsToTaskTemplates: publicProcedure
    .input(TagsToTaskTemplatesUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneTagsToTaskTemplates = await ctx.prisma.tagsToTaskTemplates.update(input);
      return updateOneTagsToTaskTemplates;
    }),
  upsertOneTagsToTaskTemplates: publicProcedure
    .input(TagsToTaskTemplatesUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneTagsToTaskTemplates = await ctx.prisma.tagsToTaskTemplates.upsert(input);
      return upsertOneTagsToTaskTemplates;
    }),

}) 
