import { t, publicProcedure } from "./helpers/createRouter";
import { PrivateTagsToProjectTemplatesAggregateSchema } from "../schemas/aggregatePrivateTagsToProjectTemplates.schema";
import { PrivateTagsToProjectTemplatesCreateManySchema } from "../schemas/createManyPrivateTagsToProjectTemplates.schema";
import { PrivateTagsToProjectTemplatesCreateOneSchema } from "../schemas/createOnePrivateTagsToProjectTemplates.schema";
import { PrivateTagsToProjectTemplatesDeleteManySchema } from "../schemas/deleteManyPrivateTagsToProjectTemplates.schema";
import { PrivateTagsToProjectTemplatesDeleteOneSchema } from "../schemas/deleteOnePrivateTagsToProjectTemplates.schema";
import { PrivateTagsToProjectTemplatesFindFirstSchema } from "../schemas/findFirstPrivateTagsToProjectTemplates.schema";
import { PrivateTagsToProjectTemplatesFindManySchema } from "../schemas/findManyPrivateTagsToProjectTemplates.schema";
import { PrivateTagsToProjectTemplatesFindUniqueSchema } from "../schemas/findUniquePrivateTagsToProjectTemplates.schema";
import { PrivateTagsToProjectTemplatesGroupBySchema } from "../schemas/groupByPrivateTagsToProjectTemplates.schema";
import { PrivateTagsToProjectTemplatesUpdateManySchema } from "../schemas/updateManyPrivateTagsToProjectTemplates.schema";
import { PrivateTagsToProjectTemplatesUpdateOneSchema } from "../schemas/updateOnePrivateTagsToProjectTemplates.schema";
import { PrivateTagsToProjectTemplatesUpsertSchema } from "../schemas/upsertOnePrivateTagsToProjectTemplates.schema";

export const privatetagstoprojecttemplatesRouter = t.router({
  aggregatePrivateTagsToProjectTemplates: publicProcedure
    .input(PrivateTagsToProjectTemplatesAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrivateTagsToProjectTemplates = await ctx.prisma.privateTagsToProjectTemplates.aggregate(input);
      return aggregatePrivateTagsToProjectTemplates;
    }),
  createManyPrivateTagsToProjectTemplates: publicProcedure
    .input(PrivateTagsToProjectTemplatesCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrivateTagsToProjectTemplates = await ctx.prisma.privateTagsToProjectTemplates.createMany(input);
      return createManyPrivateTagsToProjectTemplates;
    }),
  createOnePrivateTagsToProjectTemplates: publicProcedure
    .input(PrivateTagsToProjectTemplatesCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrivateTagsToProjectTemplates = await ctx.prisma.privateTagsToProjectTemplates.create(input);
      return createOnePrivateTagsToProjectTemplates;
    }),
  deleteManyPrivateTagsToProjectTemplates: publicProcedure
    .input(PrivateTagsToProjectTemplatesDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrivateTagsToProjectTemplates = await ctx.prisma.privateTagsToProjectTemplates.deleteMany(input);
      return deleteManyPrivateTagsToProjectTemplates;
    }),
  deleteOnePrivateTagsToProjectTemplates: publicProcedure
    .input(PrivateTagsToProjectTemplatesDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrivateTagsToProjectTemplates = await ctx.prisma.privateTagsToProjectTemplates.delete(input);
      return deleteOnePrivateTagsToProjectTemplates;
    }),
  findFirstPrivateTagsToProjectTemplates: publicProcedure
    .input(PrivateTagsToProjectTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateTagsToProjectTemplates = await ctx.prisma.privateTagsToProjectTemplates.findFirst(input);
      return findFirstPrivateTagsToProjectTemplates;
    }),
  findFirstPrivateTagsToProjectTemplatesOrThrow: publicProcedure
    .input(PrivateTagsToProjectTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateTagsToProjectTemplatesOrThrow = await ctx.prisma.privateTagsToProjectTemplates.findFirstOrThrow(input);
      return findFirstPrivateTagsToProjectTemplatesOrThrow;
    }),
  findManyPrivateTagsToProjectTemplates: publicProcedure
    .input(PrivateTagsToProjectTemplatesFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrivateTagsToProjectTemplates = await ctx.prisma.privateTagsToProjectTemplates.findMany(input);
      return findManyPrivateTagsToProjectTemplates;
    }),
  findUniquePrivateTagsToProjectTemplates: publicProcedure
    .input(PrivateTagsToProjectTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateTagsToProjectTemplates = await ctx.prisma.privateTagsToProjectTemplates.findUnique(input);
      return findUniquePrivateTagsToProjectTemplates;
    }),
  findUniquePrivateTagsToProjectTemplatesOrThrow: publicProcedure
    .input(PrivateTagsToProjectTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateTagsToProjectTemplatesOrThrow = await ctx.prisma.privateTagsToProjectTemplates.findUniqueOrThrow(input);
      return findUniquePrivateTagsToProjectTemplatesOrThrow;
    }),
  groupByPrivateTagsToProjectTemplates: publicProcedure
    .input(PrivateTagsToProjectTemplatesGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrivateTagsToProjectTemplates = await ctx.prisma.privateTagsToProjectTemplates.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrivateTagsToProjectTemplates;
    }),
  updateManyPrivateTagsToProjectTemplates: publicProcedure
    .input(PrivateTagsToProjectTemplatesUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrivateTagsToProjectTemplates = await ctx.prisma.privateTagsToProjectTemplates.updateMany(input);
      return updateManyPrivateTagsToProjectTemplates;
    }),
  updateOnePrivateTagsToProjectTemplates: publicProcedure
    .input(PrivateTagsToProjectTemplatesUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrivateTagsToProjectTemplates = await ctx.prisma.privateTagsToProjectTemplates.update(input);
      return updateOnePrivateTagsToProjectTemplates;
    }),
  upsertOnePrivateTagsToProjectTemplates: publicProcedure
    .input(PrivateTagsToProjectTemplatesUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrivateTagsToProjectTemplates = await ctx.prisma.privateTagsToProjectTemplates.upsert(input);
      return upsertOnePrivateTagsToProjectTemplates;
    }),

}) 
