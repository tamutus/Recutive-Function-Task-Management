import { t, publicProcedure } from "./helpers/createRouter";
import { EnergiesToProjectTemplatesAggregateSchema } from "../schemas/aggregateEnergiesToProjectTemplates.schema";
import { EnergiesToProjectTemplatesCreateManySchema } from "../schemas/createManyEnergiesToProjectTemplates.schema";
import { EnergiesToProjectTemplatesCreateOneSchema } from "../schemas/createOneEnergiesToProjectTemplates.schema";
import { EnergiesToProjectTemplatesDeleteManySchema } from "../schemas/deleteManyEnergiesToProjectTemplates.schema";
import { EnergiesToProjectTemplatesDeleteOneSchema } from "../schemas/deleteOneEnergiesToProjectTemplates.schema";
import { EnergiesToProjectTemplatesFindFirstSchema } from "../schemas/findFirstEnergiesToProjectTemplates.schema";
import { EnergiesToProjectTemplatesFindManySchema } from "../schemas/findManyEnergiesToProjectTemplates.schema";
import { EnergiesToProjectTemplatesFindUniqueSchema } from "../schemas/findUniqueEnergiesToProjectTemplates.schema";
import { EnergiesToProjectTemplatesGroupBySchema } from "../schemas/groupByEnergiesToProjectTemplates.schema";
import { EnergiesToProjectTemplatesUpdateManySchema } from "../schemas/updateManyEnergiesToProjectTemplates.schema";
import { EnergiesToProjectTemplatesUpdateOneSchema } from "../schemas/updateOneEnergiesToProjectTemplates.schema";
import { EnergiesToProjectTemplatesUpsertSchema } from "../schemas/upsertOneEnergiesToProjectTemplates.schema";

export const energiestoprojecttemplatesRouter = t.router({
  aggregateEnergiesToProjectTemplates: publicProcedure
    .input(EnergiesToProjectTemplatesAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateEnergiesToProjectTemplates = await ctx.prisma.energiesToProjectTemplates.aggregate(input);
      return aggregateEnergiesToProjectTemplates;
    }),
  createManyEnergiesToProjectTemplates: publicProcedure
    .input(EnergiesToProjectTemplatesCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyEnergiesToProjectTemplates = await ctx.prisma.energiesToProjectTemplates.createMany(input);
      return createManyEnergiesToProjectTemplates;
    }),
  createOneEnergiesToProjectTemplates: publicProcedure
    .input(EnergiesToProjectTemplatesCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneEnergiesToProjectTemplates = await ctx.prisma.energiesToProjectTemplates.create(input);
      return createOneEnergiesToProjectTemplates;
    }),
  deleteManyEnergiesToProjectTemplates: publicProcedure
    .input(EnergiesToProjectTemplatesDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyEnergiesToProjectTemplates = await ctx.prisma.energiesToProjectTemplates.deleteMany(input);
      return deleteManyEnergiesToProjectTemplates;
    }),
  deleteOneEnergiesToProjectTemplates: publicProcedure
    .input(EnergiesToProjectTemplatesDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneEnergiesToProjectTemplates = await ctx.prisma.energiesToProjectTemplates.delete(input);
      return deleteOneEnergiesToProjectTemplates;
    }),
  findFirstEnergiesToProjectTemplates: publicProcedure
    .input(EnergiesToProjectTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergiesToProjectTemplates = await ctx.prisma.energiesToProjectTemplates.findFirst(input);
      return findFirstEnergiesToProjectTemplates;
    }),
  findFirstEnergiesToProjectTemplatesOrThrow: publicProcedure
    .input(EnergiesToProjectTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergiesToProjectTemplatesOrThrow = await ctx.prisma.energiesToProjectTemplates.findFirstOrThrow(input);
      return findFirstEnergiesToProjectTemplatesOrThrow;
    }),
  findManyEnergiesToProjectTemplates: publicProcedure
    .input(EnergiesToProjectTemplatesFindManySchema).query(async ({ ctx, input }) => {
      const findManyEnergiesToProjectTemplates = await ctx.prisma.energiesToProjectTemplates.findMany(input);
      return findManyEnergiesToProjectTemplates;
    }),
  findUniqueEnergiesToProjectTemplates: publicProcedure
    .input(EnergiesToProjectTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergiesToProjectTemplates = await ctx.prisma.energiesToProjectTemplates.findUnique(input);
      return findUniqueEnergiesToProjectTemplates;
    }),
  findUniqueEnergiesToProjectTemplatesOrThrow: publicProcedure
    .input(EnergiesToProjectTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergiesToProjectTemplatesOrThrow = await ctx.prisma.energiesToProjectTemplates.findUniqueOrThrow(input);
      return findUniqueEnergiesToProjectTemplatesOrThrow;
    }),
  groupByEnergiesToProjectTemplates: publicProcedure
    .input(EnergiesToProjectTemplatesGroupBySchema).query(async ({ ctx, input }) => {
      const groupByEnergiesToProjectTemplates = await ctx.prisma.energiesToProjectTemplates.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByEnergiesToProjectTemplates;
    }),
  updateManyEnergiesToProjectTemplates: publicProcedure
    .input(EnergiesToProjectTemplatesUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyEnergiesToProjectTemplates = await ctx.prisma.energiesToProjectTemplates.updateMany(input);
      return updateManyEnergiesToProjectTemplates;
    }),
  updateOneEnergiesToProjectTemplates: publicProcedure
    .input(EnergiesToProjectTemplatesUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneEnergiesToProjectTemplates = await ctx.prisma.energiesToProjectTemplates.update(input);
      return updateOneEnergiesToProjectTemplates;
    }),
  upsertOneEnergiesToProjectTemplates: publicProcedure
    .input(EnergiesToProjectTemplatesUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneEnergiesToProjectTemplates = await ctx.prisma.energiesToProjectTemplates.upsert(input);
      return upsertOneEnergiesToProjectTemplates;
    }),

}) 
