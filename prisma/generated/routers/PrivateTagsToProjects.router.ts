import { t, publicProcedure } from "./helpers/createRouter";
import { PrivateTagsToProjectsAggregateSchema } from "../schemas/aggregatePrivateTagsToProjects.schema";
import { PrivateTagsToProjectsCreateManySchema } from "../schemas/createManyPrivateTagsToProjects.schema";
import { PrivateTagsToProjectsCreateOneSchema } from "../schemas/createOnePrivateTagsToProjects.schema";
import { PrivateTagsToProjectsDeleteManySchema } from "../schemas/deleteManyPrivateTagsToProjects.schema";
import { PrivateTagsToProjectsDeleteOneSchema } from "../schemas/deleteOnePrivateTagsToProjects.schema";
import { PrivateTagsToProjectsFindFirstSchema } from "../schemas/findFirstPrivateTagsToProjects.schema";
import { PrivateTagsToProjectsFindManySchema } from "../schemas/findManyPrivateTagsToProjects.schema";
import { PrivateTagsToProjectsFindUniqueSchema } from "../schemas/findUniquePrivateTagsToProjects.schema";
import { PrivateTagsToProjectsGroupBySchema } from "../schemas/groupByPrivateTagsToProjects.schema";
import { PrivateTagsToProjectsUpdateManySchema } from "../schemas/updateManyPrivateTagsToProjects.schema";
import { PrivateTagsToProjectsUpdateOneSchema } from "../schemas/updateOnePrivateTagsToProjects.schema";
import { PrivateTagsToProjectsUpsertSchema } from "../schemas/upsertOnePrivateTagsToProjects.schema";

export const privatetagstoprojectsRouter = t.router({
  aggregatePrivateTagsToProjects: publicProcedure
    .input(PrivateTagsToProjectsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrivateTagsToProjects = await ctx.prisma.privateTagsToProjects.aggregate(input);
      return aggregatePrivateTagsToProjects;
    }),
  createManyPrivateTagsToProjects: publicProcedure
    .input(PrivateTagsToProjectsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrivateTagsToProjects = await ctx.prisma.privateTagsToProjects.createMany(input);
      return createManyPrivateTagsToProjects;
    }),
  createOnePrivateTagsToProjects: publicProcedure
    .input(PrivateTagsToProjectsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrivateTagsToProjects = await ctx.prisma.privateTagsToProjects.create(input);
      return createOnePrivateTagsToProjects;
    }),
  deleteManyPrivateTagsToProjects: publicProcedure
    .input(PrivateTagsToProjectsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrivateTagsToProjects = await ctx.prisma.privateTagsToProjects.deleteMany(input);
      return deleteManyPrivateTagsToProjects;
    }),
  deleteOnePrivateTagsToProjects: publicProcedure
    .input(PrivateTagsToProjectsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrivateTagsToProjects = await ctx.prisma.privateTagsToProjects.delete(input);
      return deleteOnePrivateTagsToProjects;
    }),
  findFirstPrivateTagsToProjects: publicProcedure
    .input(PrivateTagsToProjectsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateTagsToProjects = await ctx.prisma.privateTagsToProjects.findFirst(input);
      return findFirstPrivateTagsToProjects;
    }),
  findFirstPrivateTagsToProjectsOrThrow: publicProcedure
    .input(PrivateTagsToProjectsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateTagsToProjectsOrThrow = await ctx.prisma.privateTagsToProjects.findFirstOrThrow(input);
      return findFirstPrivateTagsToProjectsOrThrow;
    }),
  findManyPrivateTagsToProjects: publicProcedure
    .input(PrivateTagsToProjectsFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrivateTagsToProjects = await ctx.prisma.privateTagsToProjects.findMany(input);
      return findManyPrivateTagsToProjects;
    }),
  findUniquePrivateTagsToProjects: publicProcedure
    .input(PrivateTagsToProjectsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateTagsToProjects = await ctx.prisma.privateTagsToProjects.findUnique(input);
      return findUniquePrivateTagsToProjects;
    }),
  findUniquePrivateTagsToProjectsOrThrow: publicProcedure
    .input(PrivateTagsToProjectsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateTagsToProjectsOrThrow = await ctx.prisma.privateTagsToProjects.findUniqueOrThrow(input);
      return findUniquePrivateTagsToProjectsOrThrow;
    }),
  groupByPrivateTagsToProjects: publicProcedure
    .input(PrivateTagsToProjectsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrivateTagsToProjects = await ctx.prisma.privateTagsToProjects.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrivateTagsToProjects;
    }),
  updateManyPrivateTagsToProjects: publicProcedure
    .input(PrivateTagsToProjectsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrivateTagsToProjects = await ctx.prisma.privateTagsToProjects.updateMany(input);
      return updateManyPrivateTagsToProjects;
    }),
  updateOnePrivateTagsToProjects: publicProcedure
    .input(PrivateTagsToProjectsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrivateTagsToProjects = await ctx.prisma.privateTagsToProjects.update(input);
      return updateOnePrivateTagsToProjects;
    }),
  upsertOnePrivateTagsToProjects: publicProcedure
    .input(PrivateTagsToProjectsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrivateTagsToProjects = await ctx.prisma.privateTagsToProjects.upsert(input);
      return upsertOnePrivateTagsToProjects;
    }),

}) 
