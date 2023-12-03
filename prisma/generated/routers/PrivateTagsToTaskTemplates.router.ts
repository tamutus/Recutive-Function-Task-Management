import { t, publicProcedure } from "./helpers/createRouter";
import { PrivateTagsToTaskTemplatesAggregateSchema } from "../schemas/aggregatePrivateTagsToTaskTemplates.schema";
import { PrivateTagsToTaskTemplatesCreateManySchema } from "../schemas/createManyPrivateTagsToTaskTemplates.schema";
import { PrivateTagsToTaskTemplatesCreateOneSchema } from "../schemas/createOnePrivateTagsToTaskTemplates.schema";
import { PrivateTagsToTaskTemplatesDeleteManySchema } from "../schemas/deleteManyPrivateTagsToTaskTemplates.schema";
import { PrivateTagsToTaskTemplatesDeleteOneSchema } from "../schemas/deleteOnePrivateTagsToTaskTemplates.schema";
import { PrivateTagsToTaskTemplatesFindFirstSchema } from "../schemas/findFirstPrivateTagsToTaskTemplates.schema";
import { PrivateTagsToTaskTemplatesFindManySchema } from "../schemas/findManyPrivateTagsToTaskTemplates.schema";
import { PrivateTagsToTaskTemplatesFindUniqueSchema } from "../schemas/findUniquePrivateTagsToTaskTemplates.schema";
import { PrivateTagsToTaskTemplatesGroupBySchema } from "../schemas/groupByPrivateTagsToTaskTemplates.schema";
import { PrivateTagsToTaskTemplatesUpdateManySchema } from "../schemas/updateManyPrivateTagsToTaskTemplates.schema";
import { PrivateTagsToTaskTemplatesUpdateOneSchema } from "../schemas/updateOnePrivateTagsToTaskTemplates.schema";
import { PrivateTagsToTaskTemplatesUpsertSchema } from "../schemas/upsertOnePrivateTagsToTaskTemplates.schema";

export const privatetagstotasktemplatesRouter = t.router({
  aggregatePrivateTagsToTaskTemplates: publicProcedure
    .input(PrivateTagsToTaskTemplatesAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrivateTagsToTaskTemplates = await ctx.prisma.privateTagsToTaskTemplates.aggregate(input);
      return aggregatePrivateTagsToTaskTemplates;
    }),
  createManyPrivateTagsToTaskTemplates: publicProcedure
    .input(PrivateTagsToTaskTemplatesCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrivateTagsToTaskTemplates = await ctx.prisma.privateTagsToTaskTemplates.createMany(input);
      return createManyPrivateTagsToTaskTemplates;
    }),
  createOnePrivateTagsToTaskTemplates: publicProcedure
    .input(PrivateTagsToTaskTemplatesCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrivateTagsToTaskTemplates = await ctx.prisma.privateTagsToTaskTemplates.create(input);
      return createOnePrivateTagsToTaskTemplates;
    }),
  deleteManyPrivateTagsToTaskTemplates: publicProcedure
    .input(PrivateTagsToTaskTemplatesDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrivateTagsToTaskTemplates = await ctx.prisma.privateTagsToTaskTemplates.deleteMany(input);
      return deleteManyPrivateTagsToTaskTemplates;
    }),
  deleteOnePrivateTagsToTaskTemplates: publicProcedure
    .input(PrivateTagsToTaskTemplatesDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrivateTagsToTaskTemplates = await ctx.prisma.privateTagsToTaskTemplates.delete(input);
      return deleteOnePrivateTagsToTaskTemplates;
    }),
  findFirstPrivateTagsToTaskTemplates: publicProcedure
    .input(PrivateTagsToTaskTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateTagsToTaskTemplates = await ctx.prisma.privateTagsToTaskTemplates.findFirst(input);
      return findFirstPrivateTagsToTaskTemplates;
    }),
  findFirstPrivateTagsToTaskTemplatesOrThrow: publicProcedure
    .input(PrivateTagsToTaskTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateTagsToTaskTemplatesOrThrow = await ctx.prisma.privateTagsToTaskTemplates.findFirstOrThrow(input);
      return findFirstPrivateTagsToTaskTemplatesOrThrow;
    }),
  findManyPrivateTagsToTaskTemplates: publicProcedure
    .input(PrivateTagsToTaskTemplatesFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrivateTagsToTaskTemplates = await ctx.prisma.privateTagsToTaskTemplates.findMany(input);
      return findManyPrivateTagsToTaskTemplates;
    }),
  findUniquePrivateTagsToTaskTemplates: publicProcedure
    .input(PrivateTagsToTaskTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateTagsToTaskTemplates = await ctx.prisma.privateTagsToTaskTemplates.findUnique(input);
      return findUniquePrivateTagsToTaskTemplates;
    }),
  findUniquePrivateTagsToTaskTemplatesOrThrow: publicProcedure
    .input(PrivateTagsToTaskTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateTagsToTaskTemplatesOrThrow = await ctx.prisma.privateTagsToTaskTemplates.findUniqueOrThrow(input);
      return findUniquePrivateTagsToTaskTemplatesOrThrow;
    }),
  groupByPrivateTagsToTaskTemplates: publicProcedure
    .input(PrivateTagsToTaskTemplatesGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrivateTagsToTaskTemplates = await ctx.prisma.privateTagsToTaskTemplates.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrivateTagsToTaskTemplates;
    }),
  updateManyPrivateTagsToTaskTemplates: publicProcedure
    .input(PrivateTagsToTaskTemplatesUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrivateTagsToTaskTemplates = await ctx.prisma.privateTagsToTaskTemplates.updateMany(input);
      return updateManyPrivateTagsToTaskTemplates;
    }),
  updateOnePrivateTagsToTaskTemplates: publicProcedure
    .input(PrivateTagsToTaskTemplatesUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrivateTagsToTaskTemplates = await ctx.prisma.privateTagsToTaskTemplates.update(input);
      return updateOnePrivateTagsToTaskTemplates;
    }),
  upsertOnePrivateTagsToTaskTemplates: publicProcedure
    .input(PrivateTagsToTaskTemplatesUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrivateTagsToTaskTemplates = await ctx.prisma.privateTagsToTaskTemplates.upsert(input);
      return upsertOnePrivateTagsToTaskTemplates;
    }),

}) 
