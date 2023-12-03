import { t, publicProcedure } from "./helpers/createRouter";
import { SkillsToTagsAggregateSchema } from "../schemas/aggregateSkillsToTags.schema";
import { SkillsToTagsCreateManySchema } from "../schemas/createManySkillsToTags.schema";
import { SkillsToTagsCreateOneSchema } from "../schemas/createOneSkillsToTags.schema";
import { SkillsToTagsDeleteManySchema } from "../schemas/deleteManySkillsToTags.schema";
import { SkillsToTagsDeleteOneSchema } from "../schemas/deleteOneSkillsToTags.schema";
import { SkillsToTagsFindFirstSchema } from "../schemas/findFirstSkillsToTags.schema";
import { SkillsToTagsFindManySchema } from "../schemas/findManySkillsToTags.schema";
import { SkillsToTagsFindUniqueSchema } from "../schemas/findUniqueSkillsToTags.schema";
import { SkillsToTagsGroupBySchema } from "../schemas/groupBySkillsToTags.schema";
import { SkillsToTagsUpdateManySchema } from "../schemas/updateManySkillsToTags.schema";
import { SkillsToTagsUpdateOneSchema } from "../schemas/updateOneSkillsToTags.schema";
import { SkillsToTagsUpsertSchema } from "../schemas/upsertOneSkillsToTags.schema";

export const skillstotagsRouter = t.router({
  aggregateSkillsToTags: publicProcedure
    .input(SkillsToTagsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateSkillsToTags = await ctx.prisma.skillsToTags.aggregate(input);
      return aggregateSkillsToTags;
    }),
  createManySkillsToTags: publicProcedure
    .input(SkillsToTagsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManySkillsToTags = await ctx.prisma.skillsToTags.createMany(input);
      return createManySkillsToTags;
    }),
  createOneSkillsToTags: publicProcedure
    .input(SkillsToTagsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneSkillsToTags = await ctx.prisma.skillsToTags.create(input);
      return createOneSkillsToTags;
    }),
  deleteManySkillsToTags: publicProcedure
    .input(SkillsToTagsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManySkillsToTags = await ctx.prisma.skillsToTags.deleteMany(input);
      return deleteManySkillsToTags;
    }),
  deleteOneSkillsToTags: publicProcedure
    .input(SkillsToTagsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneSkillsToTags = await ctx.prisma.skillsToTags.delete(input);
      return deleteOneSkillsToTags;
    }),
  findFirstSkillsToTags: publicProcedure
    .input(SkillsToTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSkillsToTags = await ctx.prisma.skillsToTags.findFirst(input);
      return findFirstSkillsToTags;
    }),
  findFirstSkillsToTagsOrThrow: publicProcedure
    .input(SkillsToTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSkillsToTagsOrThrow = await ctx.prisma.skillsToTags.findFirstOrThrow(input);
      return findFirstSkillsToTagsOrThrow;
    }),
  findManySkillsToTags: publicProcedure
    .input(SkillsToTagsFindManySchema).query(async ({ ctx, input }) => {
      const findManySkillsToTags = await ctx.prisma.skillsToTags.findMany(input);
      return findManySkillsToTags;
    }),
  findUniqueSkillsToTags: publicProcedure
    .input(SkillsToTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSkillsToTags = await ctx.prisma.skillsToTags.findUnique(input);
      return findUniqueSkillsToTags;
    }),
  findUniqueSkillsToTagsOrThrow: publicProcedure
    .input(SkillsToTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSkillsToTagsOrThrow = await ctx.prisma.skillsToTags.findUniqueOrThrow(input);
      return findUniqueSkillsToTagsOrThrow;
    }),
  groupBySkillsToTags: publicProcedure
    .input(SkillsToTagsGroupBySchema).query(async ({ ctx, input }) => {
      const groupBySkillsToTags = await ctx.prisma.skillsToTags.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupBySkillsToTags;
    }),
  updateManySkillsToTags: publicProcedure
    .input(SkillsToTagsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManySkillsToTags = await ctx.prisma.skillsToTags.updateMany(input);
      return updateManySkillsToTags;
    }),
  updateOneSkillsToTags: publicProcedure
    .input(SkillsToTagsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneSkillsToTags = await ctx.prisma.skillsToTags.update(input);
      return updateOneSkillsToTags;
    }),
  upsertOneSkillsToTags: publicProcedure
    .input(SkillsToTagsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneSkillsToTags = await ctx.prisma.skillsToTags.upsert(input);
      return upsertOneSkillsToTags;
    }),

}) 
