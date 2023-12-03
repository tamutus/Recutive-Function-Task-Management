import { t, publicProcedure } from "./helpers/createRouter";
import { ProjectsToTagsAggregateSchema } from "../schemas/aggregateProjectsToTags.schema";
import { ProjectsToTagsCreateManySchema } from "../schemas/createManyProjectsToTags.schema";
import { ProjectsToTagsCreateOneSchema } from "../schemas/createOneProjectsToTags.schema";
import { ProjectsToTagsDeleteManySchema } from "../schemas/deleteManyProjectsToTags.schema";
import { ProjectsToTagsDeleteOneSchema } from "../schemas/deleteOneProjectsToTags.schema";
import { ProjectsToTagsFindFirstSchema } from "../schemas/findFirstProjectsToTags.schema";
import { ProjectsToTagsFindManySchema } from "../schemas/findManyProjectsToTags.schema";
import { ProjectsToTagsFindUniqueSchema } from "../schemas/findUniqueProjectsToTags.schema";
import { ProjectsToTagsGroupBySchema } from "../schemas/groupByProjectsToTags.schema";
import { ProjectsToTagsUpdateManySchema } from "../schemas/updateManyProjectsToTags.schema";
import { ProjectsToTagsUpdateOneSchema } from "../schemas/updateOneProjectsToTags.schema";
import { ProjectsToTagsUpsertSchema } from "../schemas/upsertOneProjectsToTags.schema";

export const projectstotagsRouter = t.router({
  aggregateProjectsToTags: publicProcedure
    .input(ProjectsToTagsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateProjectsToTags = await ctx.prisma.projectsToTags.aggregate(input);
      return aggregateProjectsToTags;
    }),
  createManyProjectsToTags: publicProcedure
    .input(ProjectsToTagsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyProjectsToTags = await ctx.prisma.projectsToTags.createMany(input);
      return createManyProjectsToTags;
    }),
  createOneProjectsToTags: publicProcedure
    .input(ProjectsToTagsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneProjectsToTags = await ctx.prisma.projectsToTags.create(input);
      return createOneProjectsToTags;
    }),
  deleteManyProjectsToTags: publicProcedure
    .input(ProjectsToTagsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyProjectsToTags = await ctx.prisma.projectsToTags.deleteMany(input);
      return deleteManyProjectsToTags;
    }),
  deleteOneProjectsToTags: publicProcedure
    .input(ProjectsToTagsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneProjectsToTags = await ctx.prisma.projectsToTags.delete(input);
      return deleteOneProjectsToTags;
    }),
  findFirstProjectsToTags: publicProcedure
    .input(ProjectsToTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstProjectsToTags = await ctx.prisma.projectsToTags.findFirst(input);
      return findFirstProjectsToTags;
    }),
  findFirstProjectsToTagsOrThrow: publicProcedure
    .input(ProjectsToTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstProjectsToTagsOrThrow = await ctx.prisma.projectsToTags.findFirstOrThrow(input);
      return findFirstProjectsToTagsOrThrow;
    }),
  findManyProjectsToTags: publicProcedure
    .input(ProjectsToTagsFindManySchema).query(async ({ ctx, input }) => {
      const findManyProjectsToTags = await ctx.prisma.projectsToTags.findMany(input);
      return findManyProjectsToTags;
    }),
  findUniqueProjectsToTags: publicProcedure
    .input(ProjectsToTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueProjectsToTags = await ctx.prisma.projectsToTags.findUnique(input);
      return findUniqueProjectsToTags;
    }),
  findUniqueProjectsToTagsOrThrow: publicProcedure
    .input(ProjectsToTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueProjectsToTagsOrThrow = await ctx.prisma.projectsToTags.findUniqueOrThrow(input);
      return findUniqueProjectsToTagsOrThrow;
    }),
  groupByProjectsToTags: publicProcedure
    .input(ProjectsToTagsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByProjectsToTags = await ctx.prisma.projectsToTags.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByProjectsToTags;
    }),
  updateManyProjectsToTags: publicProcedure
    .input(ProjectsToTagsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyProjectsToTags = await ctx.prisma.projectsToTags.updateMany(input);
      return updateManyProjectsToTags;
    }),
  updateOneProjectsToTags: publicProcedure
    .input(ProjectsToTagsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneProjectsToTags = await ctx.prisma.projectsToTags.update(input);
      return updateOneProjectsToTags;
    }),
  upsertOneProjectsToTags: publicProcedure
    .input(ProjectsToTagsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneProjectsToTags = await ctx.prisma.projectsToTags.upsert(input);
      return upsertOneProjectsToTags;
    }),

}) 
