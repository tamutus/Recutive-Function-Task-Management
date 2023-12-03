import { t, publicProcedure } from "./helpers/createRouter";
import { PrivateEnergiesToTaskTemplatesAggregateSchema } from "../schemas/aggregatePrivateEnergiesToTaskTemplates.schema";
import { PrivateEnergiesToTaskTemplatesCreateManySchema } from "../schemas/createManyPrivateEnergiesToTaskTemplates.schema";
import { PrivateEnergiesToTaskTemplatesCreateOneSchema } from "../schemas/createOnePrivateEnergiesToTaskTemplates.schema";
import { PrivateEnergiesToTaskTemplatesDeleteManySchema } from "../schemas/deleteManyPrivateEnergiesToTaskTemplates.schema";
import { PrivateEnergiesToTaskTemplatesDeleteOneSchema } from "../schemas/deleteOnePrivateEnergiesToTaskTemplates.schema";
import { PrivateEnergiesToTaskTemplatesFindFirstSchema } from "../schemas/findFirstPrivateEnergiesToTaskTemplates.schema";
import { PrivateEnergiesToTaskTemplatesFindManySchema } from "../schemas/findManyPrivateEnergiesToTaskTemplates.schema";
import { PrivateEnergiesToTaskTemplatesFindUniqueSchema } from "../schemas/findUniquePrivateEnergiesToTaskTemplates.schema";
import { PrivateEnergiesToTaskTemplatesGroupBySchema } from "../schemas/groupByPrivateEnergiesToTaskTemplates.schema";
import { PrivateEnergiesToTaskTemplatesUpdateManySchema } from "../schemas/updateManyPrivateEnergiesToTaskTemplates.schema";
import { PrivateEnergiesToTaskTemplatesUpdateOneSchema } from "../schemas/updateOnePrivateEnergiesToTaskTemplates.schema";
import { PrivateEnergiesToTaskTemplatesUpsertSchema } from "../schemas/upsertOnePrivateEnergiesToTaskTemplates.schema";

export const privateenergiestotasktemplatesRouter = t.router({
  aggregatePrivateEnergiesToTaskTemplates: publicProcedure
    .input(PrivateEnergiesToTaskTemplatesAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrivateEnergiesToTaskTemplates = await ctx.prisma.privateEnergiesToTaskTemplates.aggregate(input);
      return aggregatePrivateEnergiesToTaskTemplates;
    }),
  createManyPrivateEnergiesToTaskTemplates: publicProcedure
    .input(PrivateEnergiesToTaskTemplatesCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrivateEnergiesToTaskTemplates = await ctx.prisma.privateEnergiesToTaskTemplates.createMany(input);
      return createManyPrivateEnergiesToTaskTemplates;
    }),
  createOnePrivateEnergiesToTaskTemplates: publicProcedure
    .input(PrivateEnergiesToTaskTemplatesCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrivateEnergiesToTaskTemplates = await ctx.prisma.privateEnergiesToTaskTemplates.create(input);
      return createOnePrivateEnergiesToTaskTemplates;
    }),
  deleteManyPrivateEnergiesToTaskTemplates: publicProcedure
    .input(PrivateEnergiesToTaskTemplatesDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrivateEnergiesToTaskTemplates = await ctx.prisma.privateEnergiesToTaskTemplates.deleteMany(input);
      return deleteManyPrivateEnergiesToTaskTemplates;
    }),
  deleteOnePrivateEnergiesToTaskTemplates: publicProcedure
    .input(PrivateEnergiesToTaskTemplatesDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrivateEnergiesToTaskTemplates = await ctx.prisma.privateEnergiesToTaskTemplates.delete(input);
      return deleteOnePrivateEnergiesToTaskTemplates;
    }),
  findFirstPrivateEnergiesToTaskTemplates: publicProcedure
    .input(PrivateEnergiesToTaskTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateEnergiesToTaskTemplates = await ctx.prisma.privateEnergiesToTaskTemplates.findFirst(input);
      return findFirstPrivateEnergiesToTaskTemplates;
    }),
  findFirstPrivateEnergiesToTaskTemplatesOrThrow: publicProcedure
    .input(PrivateEnergiesToTaskTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateEnergiesToTaskTemplatesOrThrow = await ctx.prisma.privateEnergiesToTaskTemplates.findFirstOrThrow(input);
      return findFirstPrivateEnergiesToTaskTemplatesOrThrow;
    }),
  findManyPrivateEnergiesToTaskTemplates: publicProcedure
    .input(PrivateEnergiesToTaskTemplatesFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrivateEnergiesToTaskTemplates = await ctx.prisma.privateEnergiesToTaskTemplates.findMany(input);
      return findManyPrivateEnergiesToTaskTemplates;
    }),
  findUniquePrivateEnergiesToTaskTemplates: publicProcedure
    .input(PrivateEnergiesToTaskTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateEnergiesToTaskTemplates = await ctx.prisma.privateEnergiesToTaskTemplates.findUnique(input);
      return findUniquePrivateEnergiesToTaskTemplates;
    }),
  findUniquePrivateEnergiesToTaskTemplatesOrThrow: publicProcedure
    .input(PrivateEnergiesToTaskTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateEnergiesToTaskTemplatesOrThrow = await ctx.prisma.privateEnergiesToTaskTemplates.findUniqueOrThrow(input);
      return findUniquePrivateEnergiesToTaskTemplatesOrThrow;
    }),
  groupByPrivateEnergiesToTaskTemplates: publicProcedure
    .input(PrivateEnergiesToTaskTemplatesGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrivateEnergiesToTaskTemplates = await ctx.prisma.privateEnergiesToTaskTemplates.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrivateEnergiesToTaskTemplates;
    }),
  updateManyPrivateEnergiesToTaskTemplates: publicProcedure
    .input(PrivateEnergiesToTaskTemplatesUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrivateEnergiesToTaskTemplates = await ctx.prisma.privateEnergiesToTaskTemplates.updateMany(input);
      return updateManyPrivateEnergiesToTaskTemplates;
    }),
  updateOnePrivateEnergiesToTaskTemplates: publicProcedure
    .input(PrivateEnergiesToTaskTemplatesUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrivateEnergiesToTaskTemplates = await ctx.prisma.privateEnergiesToTaskTemplates.update(input);
      return updateOnePrivateEnergiesToTaskTemplates;
    }),
  upsertOnePrivateEnergiesToTaskTemplates: publicProcedure
    .input(PrivateEnergiesToTaskTemplatesUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrivateEnergiesToTaskTemplates = await ctx.prisma.privateEnergiesToTaskTemplates.upsert(input);
      return upsertOnePrivateEnergiesToTaskTemplates;
    }),

}) 
