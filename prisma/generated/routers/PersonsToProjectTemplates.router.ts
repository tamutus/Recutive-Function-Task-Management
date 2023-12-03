import { t, publicProcedure } from "./helpers/createRouter";
import { PersonsToProjectTemplatesAggregateSchema } from "../schemas/aggregatePersonsToProjectTemplates.schema";
import { PersonsToProjectTemplatesCreateManySchema } from "../schemas/createManyPersonsToProjectTemplates.schema";
import { PersonsToProjectTemplatesCreateOneSchema } from "../schemas/createOnePersonsToProjectTemplates.schema";
import { PersonsToProjectTemplatesDeleteManySchema } from "../schemas/deleteManyPersonsToProjectTemplates.schema";
import { PersonsToProjectTemplatesDeleteOneSchema } from "../schemas/deleteOnePersonsToProjectTemplates.schema";
import { PersonsToProjectTemplatesFindFirstSchema } from "../schemas/findFirstPersonsToProjectTemplates.schema";
import { PersonsToProjectTemplatesFindManySchema } from "../schemas/findManyPersonsToProjectTemplates.schema";
import { PersonsToProjectTemplatesFindUniqueSchema } from "../schemas/findUniquePersonsToProjectTemplates.schema";
import { PersonsToProjectTemplatesGroupBySchema } from "../schemas/groupByPersonsToProjectTemplates.schema";
import { PersonsToProjectTemplatesUpdateManySchema } from "../schemas/updateManyPersonsToProjectTemplates.schema";
import { PersonsToProjectTemplatesUpdateOneSchema } from "../schemas/updateOnePersonsToProjectTemplates.schema";
import { PersonsToProjectTemplatesUpsertSchema } from "../schemas/upsertOnePersonsToProjectTemplates.schema";

export const personstoprojecttemplatesRouter = t.router({
  aggregatePersonsToProjectTemplates: publicProcedure
    .input(PersonsToProjectTemplatesAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePersonsToProjectTemplates = await ctx.prisma.personsToProjectTemplates.aggregate(input);
      return aggregatePersonsToProjectTemplates;
    }),
  createManyPersonsToProjectTemplates: publicProcedure
    .input(PersonsToProjectTemplatesCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPersonsToProjectTemplates = await ctx.prisma.personsToProjectTemplates.createMany(input);
      return createManyPersonsToProjectTemplates;
    }),
  createOnePersonsToProjectTemplates: publicProcedure
    .input(PersonsToProjectTemplatesCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePersonsToProjectTemplates = await ctx.prisma.personsToProjectTemplates.create(input);
      return createOnePersonsToProjectTemplates;
    }),
  deleteManyPersonsToProjectTemplates: publicProcedure
    .input(PersonsToProjectTemplatesDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPersonsToProjectTemplates = await ctx.prisma.personsToProjectTemplates.deleteMany(input);
      return deleteManyPersonsToProjectTemplates;
    }),
  deleteOnePersonsToProjectTemplates: publicProcedure
    .input(PersonsToProjectTemplatesDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePersonsToProjectTemplates = await ctx.prisma.personsToProjectTemplates.delete(input);
      return deleteOnePersonsToProjectTemplates;
    }),
  findFirstPersonsToProjectTemplates: publicProcedure
    .input(PersonsToProjectTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPersonsToProjectTemplates = await ctx.prisma.personsToProjectTemplates.findFirst(input);
      return findFirstPersonsToProjectTemplates;
    }),
  findFirstPersonsToProjectTemplatesOrThrow: publicProcedure
    .input(PersonsToProjectTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPersonsToProjectTemplatesOrThrow = await ctx.prisma.personsToProjectTemplates.findFirstOrThrow(input);
      return findFirstPersonsToProjectTemplatesOrThrow;
    }),
  findManyPersonsToProjectTemplates: publicProcedure
    .input(PersonsToProjectTemplatesFindManySchema).query(async ({ ctx, input }) => {
      const findManyPersonsToProjectTemplates = await ctx.prisma.personsToProjectTemplates.findMany(input);
      return findManyPersonsToProjectTemplates;
    }),
  findUniquePersonsToProjectTemplates: publicProcedure
    .input(PersonsToProjectTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePersonsToProjectTemplates = await ctx.prisma.personsToProjectTemplates.findUnique(input);
      return findUniquePersonsToProjectTemplates;
    }),
  findUniquePersonsToProjectTemplatesOrThrow: publicProcedure
    .input(PersonsToProjectTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePersonsToProjectTemplatesOrThrow = await ctx.prisma.personsToProjectTemplates.findUniqueOrThrow(input);
      return findUniquePersonsToProjectTemplatesOrThrow;
    }),
  groupByPersonsToProjectTemplates: publicProcedure
    .input(PersonsToProjectTemplatesGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPersonsToProjectTemplates = await ctx.prisma.personsToProjectTemplates.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPersonsToProjectTemplates;
    }),
  updateManyPersonsToProjectTemplates: publicProcedure
    .input(PersonsToProjectTemplatesUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPersonsToProjectTemplates = await ctx.prisma.personsToProjectTemplates.updateMany(input);
      return updateManyPersonsToProjectTemplates;
    }),
  updateOnePersonsToProjectTemplates: publicProcedure
    .input(PersonsToProjectTemplatesUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePersonsToProjectTemplates = await ctx.prisma.personsToProjectTemplates.update(input);
      return updateOnePersonsToProjectTemplates;
    }),
  upsertOnePersonsToProjectTemplates: publicProcedure
    .input(PersonsToProjectTemplatesUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePersonsToProjectTemplates = await ctx.prisma.personsToProjectTemplates.upsert(input);
      return upsertOnePersonsToProjectTemplates;
    }),

}) 
