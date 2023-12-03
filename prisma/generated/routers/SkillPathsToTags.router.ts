import { t, publicProcedure } from "./helpers/createRouter";
import { SkillPathsToTagsAggregateSchema } from "../schemas/aggregateSkillPathsToTags.schema";
import { SkillPathsToTagsCreateManySchema } from "../schemas/createManySkillPathsToTags.schema";
import { SkillPathsToTagsCreateOneSchema } from "../schemas/createOneSkillPathsToTags.schema";
import { SkillPathsToTagsDeleteManySchema } from "../schemas/deleteManySkillPathsToTags.schema";
import { SkillPathsToTagsDeleteOneSchema } from "../schemas/deleteOneSkillPathsToTags.schema";
import { SkillPathsToTagsFindFirstSchema } from "../schemas/findFirstSkillPathsToTags.schema";
import { SkillPathsToTagsFindManySchema } from "../schemas/findManySkillPathsToTags.schema";
import { SkillPathsToTagsFindUniqueSchema } from "../schemas/findUniqueSkillPathsToTags.schema";
import { SkillPathsToTagsGroupBySchema } from "../schemas/groupBySkillPathsToTags.schema";
import { SkillPathsToTagsUpdateManySchema } from "../schemas/updateManySkillPathsToTags.schema";
import { SkillPathsToTagsUpdateOneSchema } from "../schemas/updateOneSkillPathsToTags.schema";
import { SkillPathsToTagsUpsertSchema } from "../schemas/upsertOneSkillPathsToTags.schema";

export const skillpathstotagsRouter = t.router({
  aggregateSkillPathsToTags: publicProcedure
    .input(SkillPathsToTagsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateSkillPathsToTags = await ctx.prisma.skillPathsToTags.aggregate(input);
      return aggregateSkillPathsToTags;
    }),
  createManySkillPathsToTags: publicProcedure
    .input(SkillPathsToTagsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManySkillPathsToTags = await ctx.prisma.skillPathsToTags.createMany(input);
      return createManySkillPathsToTags;
    }),
  createOneSkillPathsToTags: publicProcedure
    .input(SkillPathsToTagsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneSkillPathsToTags = await ctx.prisma.skillPathsToTags.create(input);
      return createOneSkillPathsToTags;
    }),
  deleteManySkillPathsToTags: publicProcedure
    .input(SkillPathsToTagsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManySkillPathsToTags = await ctx.prisma.skillPathsToTags.deleteMany(input);
      return deleteManySkillPathsToTags;
    }),
  deleteOneSkillPathsToTags: publicProcedure
    .input(SkillPathsToTagsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneSkillPathsToTags = await ctx.prisma.skillPathsToTags.delete(input);
      return deleteOneSkillPathsToTags;
    }),
  findFirstSkillPathsToTags: publicProcedure
    .input(SkillPathsToTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSkillPathsToTags = await ctx.prisma.skillPathsToTags.findFirst(input);
      return findFirstSkillPathsToTags;
    }),
  findFirstSkillPathsToTagsOrThrow: publicProcedure
    .input(SkillPathsToTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSkillPathsToTagsOrThrow = await ctx.prisma.skillPathsToTags.findFirstOrThrow(input);
      return findFirstSkillPathsToTagsOrThrow;
    }),
  findManySkillPathsToTags: publicProcedure
    .input(SkillPathsToTagsFindManySchema).query(async ({ ctx, input }) => {
      const findManySkillPathsToTags = await ctx.prisma.skillPathsToTags.findMany(input);
      return findManySkillPathsToTags;
    }),
  findUniqueSkillPathsToTags: publicProcedure
    .input(SkillPathsToTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSkillPathsToTags = await ctx.prisma.skillPathsToTags.findUnique(input);
      return findUniqueSkillPathsToTags;
    }),
  findUniqueSkillPathsToTagsOrThrow: publicProcedure
    .input(SkillPathsToTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSkillPathsToTagsOrThrow = await ctx.prisma.skillPathsToTags.findUniqueOrThrow(input);
      return findUniqueSkillPathsToTagsOrThrow;
    }),
  groupBySkillPathsToTags: publicProcedure
    .input(SkillPathsToTagsGroupBySchema).query(async ({ ctx, input }) => {
      const groupBySkillPathsToTags = await ctx.prisma.skillPathsToTags.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupBySkillPathsToTags;
    }),
  updateManySkillPathsToTags: publicProcedure
    .input(SkillPathsToTagsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManySkillPathsToTags = await ctx.prisma.skillPathsToTags.updateMany(input);
      return updateManySkillPathsToTags;
    }),
  updateOneSkillPathsToTags: publicProcedure
    .input(SkillPathsToTagsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneSkillPathsToTags = await ctx.prisma.skillPathsToTags.update(input);
      return updateOneSkillPathsToTags;
    }),
  upsertOneSkillPathsToTags: publicProcedure
    .input(SkillPathsToTagsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneSkillPathsToTags = await ctx.prisma.skillPathsToTags.upsert(input);
      return upsertOneSkillPathsToTags;
    }),

}) 
