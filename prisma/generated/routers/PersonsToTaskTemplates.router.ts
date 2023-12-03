import { t, publicProcedure } from "./helpers/createRouter";
import { PersonsToTaskTemplatesAggregateSchema } from "../schemas/aggregatePersonsToTaskTemplates.schema";
import { PersonsToTaskTemplatesCreateManySchema } from "../schemas/createManyPersonsToTaskTemplates.schema";
import { PersonsToTaskTemplatesCreateOneSchema } from "../schemas/createOnePersonsToTaskTemplates.schema";
import { PersonsToTaskTemplatesDeleteManySchema } from "../schemas/deleteManyPersonsToTaskTemplates.schema";
import { PersonsToTaskTemplatesDeleteOneSchema } from "../schemas/deleteOnePersonsToTaskTemplates.schema";
import { PersonsToTaskTemplatesFindFirstSchema } from "../schemas/findFirstPersonsToTaskTemplates.schema";
import { PersonsToTaskTemplatesFindManySchema } from "../schemas/findManyPersonsToTaskTemplates.schema";
import { PersonsToTaskTemplatesFindUniqueSchema } from "../schemas/findUniquePersonsToTaskTemplates.schema";
import { PersonsToTaskTemplatesGroupBySchema } from "../schemas/groupByPersonsToTaskTemplates.schema";
import { PersonsToTaskTemplatesUpdateManySchema } from "../schemas/updateManyPersonsToTaskTemplates.schema";
import { PersonsToTaskTemplatesUpdateOneSchema } from "../schemas/updateOnePersonsToTaskTemplates.schema";
import { PersonsToTaskTemplatesUpsertSchema } from "../schemas/upsertOnePersonsToTaskTemplates.schema";

export const personstotasktemplatesRouter = t.router({
  aggregatePersonsToTaskTemplates: publicProcedure
    .input(PersonsToTaskTemplatesAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePersonsToTaskTemplates = await ctx.prisma.personsToTaskTemplates.aggregate(input);
      return aggregatePersonsToTaskTemplates;
    }),
  createManyPersonsToTaskTemplates: publicProcedure
    .input(PersonsToTaskTemplatesCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPersonsToTaskTemplates = await ctx.prisma.personsToTaskTemplates.createMany(input);
      return createManyPersonsToTaskTemplates;
    }),
  createOnePersonsToTaskTemplates: publicProcedure
    .input(PersonsToTaskTemplatesCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePersonsToTaskTemplates = await ctx.prisma.personsToTaskTemplates.create(input);
      return createOnePersonsToTaskTemplates;
    }),
  deleteManyPersonsToTaskTemplates: publicProcedure
    .input(PersonsToTaskTemplatesDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPersonsToTaskTemplates = await ctx.prisma.personsToTaskTemplates.deleteMany(input);
      return deleteManyPersonsToTaskTemplates;
    }),
  deleteOnePersonsToTaskTemplates: publicProcedure
    .input(PersonsToTaskTemplatesDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePersonsToTaskTemplates = await ctx.prisma.personsToTaskTemplates.delete(input);
      return deleteOnePersonsToTaskTemplates;
    }),
  findFirstPersonsToTaskTemplates: publicProcedure
    .input(PersonsToTaskTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPersonsToTaskTemplates = await ctx.prisma.personsToTaskTemplates.findFirst(input);
      return findFirstPersonsToTaskTemplates;
    }),
  findFirstPersonsToTaskTemplatesOrThrow: publicProcedure
    .input(PersonsToTaskTemplatesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPersonsToTaskTemplatesOrThrow = await ctx.prisma.personsToTaskTemplates.findFirstOrThrow(input);
      return findFirstPersonsToTaskTemplatesOrThrow;
    }),
  findManyPersonsToTaskTemplates: publicProcedure
    .input(PersonsToTaskTemplatesFindManySchema).query(async ({ ctx, input }) => {
      const findManyPersonsToTaskTemplates = await ctx.prisma.personsToTaskTemplates.findMany(input);
      return findManyPersonsToTaskTemplates;
    }),
  findUniquePersonsToTaskTemplates: publicProcedure
    .input(PersonsToTaskTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePersonsToTaskTemplates = await ctx.prisma.personsToTaskTemplates.findUnique(input);
      return findUniquePersonsToTaskTemplates;
    }),
  findUniquePersonsToTaskTemplatesOrThrow: publicProcedure
    .input(PersonsToTaskTemplatesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePersonsToTaskTemplatesOrThrow = await ctx.prisma.personsToTaskTemplates.findUniqueOrThrow(input);
      return findUniquePersonsToTaskTemplatesOrThrow;
    }),
  groupByPersonsToTaskTemplates: publicProcedure
    .input(PersonsToTaskTemplatesGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPersonsToTaskTemplates = await ctx.prisma.personsToTaskTemplates.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPersonsToTaskTemplates;
    }),
  updateManyPersonsToTaskTemplates: publicProcedure
    .input(PersonsToTaskTemplatesUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPersonsToTaskTemplates = await ctx.prisma.personsToTaskTemplates.updateMany(input);
      return updateManyPersonsToTaskTemplates;
    }),
  updateOnePersonsToTaskTemplates: publicProcedure
    .input(PersonsToTaskTemplatesUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePersonsToTaskTemplates = await ctx.prisma.personsToTaskTemplates.update(input);
      return updateOnePersonsToTaskTemplates;
    }),
  upsertOnePersonsToTaskTemplates: publicProcedure
    .input(PersonsToTaskTemplatesUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePersonsToTaskTemplates = await ctx.prisma.personsToTaskTemplates.upsert(input);
      return upsertOnePersonsToTaskTemplates;
    }),

}) 
