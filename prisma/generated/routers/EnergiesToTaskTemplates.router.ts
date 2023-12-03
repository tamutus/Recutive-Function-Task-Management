import { t, publicProcedure } from "./helpers/createRouter";
import { EnergiesToTaskTemplatesAggregateSchema } from "../schemas/aggregateEnergiesToTaskTemplates.schema";
import { EnergiesToTaskTemplatesCreateManySchema } from "../schemas/createManyEnergiesToTaskTemplates.schema";
import { EnergiesToTaskTemplatesCreateOneSchema } from "../schemas/createOneEnergiesToTaskTemplates.schema";
import { EnergiesToTaskTemplatesDeleteManySchema } from "../schemas/deleteManyEnergiesToTaskTemplates.schema";
import { EnergiesToTaskTemplatesDeleteOneSchema } from "../schemas/deleteOneEnergiesToTaskTemplates.schema";
import { EnergiesToTaskTemplatesFindFirstSchema } from "../schemas/findFirstEnergiesToTaskTemplates.schema";
import { EnergiesToTaskTemplatesFindManySchema } from "../schemas/findManyEnergiesToTaskTemplates.schema";
import { EnergiesToTaskTemplatesFindUniqueSchema } from "../schemas/findUniqueEnergiesToTaskTemplates.schema";
import { EnergiesToTaskTemplatesGroupBySchema } from "../schemas/groupByEnergiesToTaskTemplates.schema";
import { EnergiesToTaskTemplatesUpdateManySchema } from "../schemas/updateManyEnergiesToTaskTemplates.schema";
import { EnergiesToTaskTemplatesUpdateOneSchema } from "../schemas/updateOneEnergiesToTaskTemplates.schema";
import { EnergiesToTaskTemplatesUpsertSchema } from "../schemas/upsertOneEnergiesToTaskTemplates.schema";

export const energiestotasktemplatesRouter = t.router({
  aggregateEnergiesToTaskTemplates: publicProcedure
    .input(EnergiesToTaskTemplatesAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateEnergiesToTaskTemplates = await ctx.prisma.energiesToTaskTemplates.aggregate(input);
      return aggregateEnergiesToTaskTemplates;
    }),
  createManyEnergiesToTaskTemplates: publicProcedure
    .input(EnergiesToTaskTemplatesCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyEnergiesToTaskTemplates = await ctx.prisma.energiesToTaskTemplates.createMany(input);
      return createManyEnergiesToTaskTemplates;
    }),
  createOneEnergiesToTaskTemplates: publicProcedure
    .input(EnergiesToTaskTemplatesCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneEnergiesToTaskTemplates = await ctx.prisma.energiesToTaskTemplates.create(input);
      return createOneEnergiesToTaskTemplates;
    }),
  deleteManyEnergiesToTaskTemplates: publicProcedure
    .input(EnergiesToTaskTemplatesDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyEnergiesToTaskTemplates = await ctx.prisma.energiesToTaskTemplates.deleteMany(input);
      return deleteManyEnergiesToTaskTemplates;
    }),
  deleteOneEnergiesToTaskTemplates: publicProcedure
    .input(EnergiesToTaskTemplatesDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneEnergiesToTaskTemplates = await ctx.prisma.energiesToTaskTemplates.delete(input);
      return deleteOneEnergiesToTaskTemplates;
    }),
  findFirstEnergiesToTaskTemplates: publicProcedure
    .input(EnergiesToTaskTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergiesToTaskTemplates = await ctx.prisma.energiesToTaskTemplates.findFirst(input);
      return findFirstEnergiesToTaskTemplates;
    }),
  findFirstEnergiesToTaskTemplatesOrThrow: publicProcedure
    .input(EnergiesToTaskTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergiesToTaskTemplatesOrThrow = await ctx.prisma.energiesToTaskTemplates.findFirstOrThrow(input);
      return findFirstEnergiesToTaskTemplatesOrThrow;
    }),
  findManyEnergiesToTaskTemplates: publicProcedure
    .input(EnergiesToTaskTemplatesFindManySchema).query(async ({ ctx, input }) => {
      const findManyEnergiesToTaskTemplates = await ctx.prisma.energiesToTaskTemplates.findMany(input);
      return findManyEnergiesToTaskTemplates;
    }),
  findUniqueEnergiesToTaskTemplates: publicProcedure
    .input(EnergiesToTaskTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergiesToTaskTemplates = await ctx.prisma.energiesToTaskTemplates.findUnique(input);
      return findUniqueEnergiesToTaskTemplates;
    }),
  findUniqueEnergiesToTaskTemplatesOrThrow: publicProcedure
    .input(EnergiesToTaskTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergiesToTaskTemplatesOrThrow = await ctx.prisma.energiesToTaskTemplates.findUniqueOrThrow(input);
      return findUniqueEnergiesToTaskTemplatesOrThrow;
    }),
  groupByEnergiesToTaskTemplates: publicProcedure
    .input(EnergiesToTaskTemplatesGroupBySchema).query(async ({ ctx, input }) => {
      const groupByEnergiesToTaskTemplates = await ctx.prisma.energiesToTaskTemplates.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByEnergiesToTaskTemplates;
    }),
  updateManyEnergiesToTaskTemplates: publicProcedure
    .input(EnergiesToTaskTemplatesUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyEnergiesToTaskTemplates = await ctx.prisma.energiesToTaskTemplates.updateMany(input);
      return updateManyEnergiesToTaskTemplates;
    }),
  updateOneEnergiesToTaskTemplates: publicProcedure
    .input(EnergiesToTaskTemplatesUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneEnergiesToTaskTemplates = await ctx.prisma.energiesToTaskTemplates.update(input);
      return updateOneEnergiesToTaskTemplates;
    }),
  upsertOneEnergiesToTaskTemplates: publicProcedure
    .input(EnergiesToTaskTemplatesUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneEnergiesToTaskTemplates = await ctx.prisma.energiesToTaskTemplates.upsert(input);
      return upsertOneEnergiesToTaskTemplates;
    }),

}) 
