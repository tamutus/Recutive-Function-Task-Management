import { t, publicProcedure } from "./helpers/createRouter";
import { PrivateEnergiesToProjectTemplatesAggregateSchema } from "../schemas/aggregatePrivateEnergiesToProjectTemplates.schema";
import { PrivateEnergiesToProjectTemplatesCreateManySchema } from "../schemas/createManyPrivateEnergiesToProjectTemplates.schema";
import { PrivateEnergiesToProjectTemplatesCreateOneSchema } from "../schemas/createOnePrivateEnergiesToProjectTemplates.schema";
import { PrivateEnergiesToProjectTemplatesDeleteManySchema } from "../schemas/deleteManyPrivateEnergiesToProjectTemplates.schema";
import { PrivateEnergiesToProjectTemplatesDeleteOneSchema } from "../schemas/deleteOnePrivateEnergiesToProjectTemplates.schema";
import { PrivateEnergiesToProjectTemplatesFindFirstSchema } from "../schemas/findFirstPrivateEnergiesToProjectTemplates.schema";
import { PrivateEnergiesToProjectTemplatesFindManySchema } from "../schemas/findManyPrivateEnergiesToProjectTemplates.schema";
import { PrivateEnergiesToProjectTemplatesFindUniqueSchema } from "../schemas/findUniquePrivateEnergiesToProjectTemplates.schema";
import { PrivateEnergiesToProjectTemplatesGroupBySchema } from "../schemas/groupByPrivateEnergiesToProjectTemplates.schema";
import { PrivateEnergiesToProjectTemplatesUpdateManySchema } from "../schemas/updateManyPrivateEnergiesToProjectTemplates.schema";
import { PrivateEnergiesToProjectTemplatesUpdateOneSchema } from "../schemas/updateOnePrivateEnergiesToProjectTemplates.schema";
import { PrivateEnergiesToProjectTemplatesUpsertSchema } from "../schemas/upsertOnePrivateEnergiesToProjectTemplates.schema";

export const privateenergiestoprojecttemplatesRouter = t.router({
  aggregatePrivateEnergiesToProjectTemplates: publicProcedure
    .input(PrivateEnergiesToProjectTemplatesAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrivateEnergiesToProjectTemplates = await ctx.prisma.privateEnergiesToProjectTemplates.aggregate(input);
      return aggregatePrivateEnergiesToProjectTemplates;
    }),
  createManyPrivateEnergiesToProjectTemplates: publicProcedure
    .input(PrivateEnergiesToProjectTemplatesCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrivateEnergiesToProjectTemplates = await ctx.prisma.privateEnergiesToProjectTemplates.createMany(input);
      return createManyPrivateEnergiesToProjectTemplates;
    }),
  createOnePrivateEnergiesToProjectTemplates: publicProcedure
    .input(PrivateEnergiesToProjectTemplatesCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrivateEnergiesToProjectTemplates = await ctx.prisma.privateEnergiesToProjectTemplates.create(input);
      return createOnePrivateEnergiesToProjectTemplates;
    }),
  deleteManyPrivateEnergiesToProjectTemplates: publicProcedure
    .input(PrivateEnergiesToProjectTemplatesDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrivateEnergiesToProjectTemplates = await ctx.prisma.privateEnergiesToProjectTemplates.deleteMany(input);
      return deleteManyPrivateEnergiesToProjectTemplates;
    }),
  deleteOnePrivateEnergiesToProjectTemplates: publicProcedure
    .input(PrivateEnergiesToProjectTemplatesDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrivateEnergiesToProjectTemplates = await ctx.prisma.privateEnergiesToProjectTemplates.delete(input);
      return deleteOnePrivateEnergiesToProjectTemplates;
    }),
  findFirstPrivateEnergiesToProjectTemplates: publicProcedure
    .input(PrivateEnergiesToProjectTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateEnergiesToProjectTemplates = await ctx.prisma.privateEnergiesToProjectTemplates.findFirst(input);
      return findFirstPrivateEnergiesToProjectTemplates;
    }),
  findFirstPrivateEnergiesToProjectTemplatesOrThrow: publicProcedure
    .input(PrivateEnergiesToProjectTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrivateEnergiesToProjectTemplatesOrThrow = await ctx.prisma.privateEnergiesToProjectTemplates.findFirstOrThrow(input);
      return findFirstPrivateEnergiesToProjectTemplatesOrThrow;
    }),
  findManyPrivateEnergiesToProjectTemplates: publicProcedure
    .input(PrivateEnergiesToProjectTemplatesFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrivateEnergiesToProjectTemplates = await ctx.prisma.privateEnergiesToProjectTemplates.findMany(input);
      return findManyPrivateEnergiesToProjectTemplates;
    }),
  findUniquePrivateEnergiesToProjectTemplates: publicProcedure
    .input(PrivateEnergiesToProjectTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateEnergiesToProjectTemplates = await ctx.prisma.privateEnergiesToProjectTemplates.findUnique(input);
      return findUniquePrivateEnergiesToProjectTemplates;
    }),
  findUniquePrivateEnergiesToProjectTemplatesOrThrow: publicProcedure
    .input(PrivateEnergiesToProjectTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrivateEnergiesToProjectTemplatesOrThrow = await ctx.prisma.privateEnergiesToProjectTemplates.findUniqueOrThrow(input);
      return findUniquePrivateEnergiesToProjectTemplatesOrThrow;
    }),
  groupByPrivateEnergiesToProjectTemplates: publicProcedure
    .input(PrivateEnergiesToProjectTemplatesGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrivateEnergiesToProjectTemplates = await ctx.prisma.privateEnergiesToProjectTemplates.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrivateEnergiesToProjectTemplates;
    }),
  updateManyPrivateEnergiesToProjectTemplates: publicProcedure
    .input(PrivateEnergiesToProjectTemplatesUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrivateEnergiesToProjectTemplates = await ctx.prisma.privateEnergiesToProjectTemplates.updateMany(input);
      return updateManyPrivateEnergiesToProjectTemplates;
    }),
  updateOnePrivateEnergiesToProjectTemplates: publicProcedure
    .input(PrivateEnergiesToProjectTemplatesUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrivateEnergiesToProjectTemplates = await ctx.prisma.privateEnergiesToProjectTemplates.update(input);
      return updateOnePrivateEnergiesToProjectTemplates;
    }),
  upsertOnePrivateEnergiesToProjectTemplates: publicProcedure
    .input(PrivateEnergiesToProjectTemplatesUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrivateEnergiesToProjectTemplates = await ctx.prisma.privateEnergiesToProjectTemplates.upsert(input);
      return upsertOnePrivateEnergiesToProjectTemplates;
    }),

}) 
