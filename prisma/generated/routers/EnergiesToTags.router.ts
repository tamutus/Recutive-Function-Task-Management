import { t, publicProcedure } from "./helpers/createRouter";
import { EnergiesToTagsAggregateSchema } from "../schemas/aggregateEnergiesToTags.schema";
import { EnergiesToTagsCreateManySchema } from "../schemas/createManyEnergiesToTags.schema";
import { EnergiesToTagsCreateOneSchema } from "../schemas/createOneEnergiesToTags.schema";
import { EnergiesToTagsDeleteManySchema } from "../schemas/deleteManyEnergiesToTags.schema";
import { EnergiesToTagsDeleteOneSchema } from "../schemas/deleteOneEnergiesToTags.schema";
import { EnergiesToTagsFindFirstSchema } from "../schemas/findFirstEnergiesToTags.schema";
import { EnergiesToTagsFindManySchema } from "../schemas/findManyEnergiesToTags.schema";
import { EnergiesToTagsFindUniqueSchema } from "../schemas/findUniqueEnergiesToTags.schema";
import { EnergiesToTagsGroupBySchema } from "../schemas/groupByEnergiesToTags.schema";
import { EnergiesToTagsUpdateManySchema } from "../schemas/updateManyEnergiesToTags.schema";
import { EnergiesToTagsUpdateOneSchema } from "../schemas/updateOneEnergiesToTags.schema";
import { EnergiesToTagsUpsertSchema } from "../schemas/upsertOneEnergiesToTags.schema";

export const energiestotagsRouter = t.router({
  aggregateEnergiesToTags: publicProcedure
    .input(EnergiesToTagsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateEnergiesToTags = await ctx.prisma.energiesToTags.aggregate(input);
      return aggregateEnergiesToTags;
    }),
  createManyEnergiesToTags: publicProcedure
    .input(EnergiesToTagsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyEnergiesToTags = await ctx.prisma.energiesToTags.createMany(input);
      return createManyEnergiesToTags;
    }),
  createOneEnergiesToTags: publicProcedure
    .input(EnergiesToTagsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneEnergiesToTags = await ctx.prisma.energiesToTags.create(input);
      return createOneEnergiesToTags;
    }),
  deleteManyEnergiesToTags: publicProcedure
    .input(EnergiesToTagsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyEnergiesToTags = await ctx.prisma.energiesToTags.deleteMany(input);
      return deleteManyEnergiesToTags;
    }),
  deleteOneEnergiesToTags: publicProcedure
    .input(EnergiesToTagsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneEnergiesToTags = await ctx.prisma.energiesToTags.delete(input);
      return deleteOneEnergiesToTags;
    }),
  findFirstEnergiesToTags: publicProcedure
    .input(EnergiesToTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergiesToTags = await ctx.prisma.energiesToTags.findFirst(input);
      return findFirstEnergiesToTags;
    }),
  findFirstEnergiesToTagsOrThrow: publicProcedure
    .input(EnergiesToTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEnergiesToTagsOrThrow = await ctx.prisma.energiesToTags.findFirstOrThrow(input);
      return findFirstEnergiesToTagsOrThrow;
    }),
  findManyEnergiesToTags: publicProcedure
    .input(EnergiesToTagsFindManySchema).query(async ({ ctx, input }) => {
      const findManyEnergiesToTags = await ctx.prisma.energiesToTags.findMany(input);
      return findManyEnergiesToTags;
    }),
  findUniqueEnergiesToTags: publicProcedure
    .input(EnergiesToTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergiesToTags = await ctx.prisma.energiesToTags.findUnique(input);
      return findUniqueEnergiesToTags;
    }),
  findUniqueEnergiesToTagsOrThrow: publicProcedure
    .input(EnergiesToTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEnergiesToTagsOrThrow = await ctx.prisma.energiesToTags.findUniqueOrThrow(input);
      return findUniqueEnergiesToTagsOrThrow;
    }),
  groupByEnergiesToTags: publicProcedure
    .input(EnergiesToTagsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByEnergiesToTags = await ctx.prisma.energiesToTags.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByEnergiesToTags;
    }),
  updateManyEnergiesToTags: publicProcedure
    .input(EnergiesToTagsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyEnergiesToTags = await ctx.prisma.energiesToTags.updateMany(input);
      return updateManyEnergiesToTags;
    }),
  updateOneEnergiesToTags: publicProcedure
    .input(EnergiesToTagsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneEnergiesToTags = await ctx.prisma.energiesToTags.update(input);
      return updateOneEnergiesToTags;
    }),
  upsertOneEnergiesToTags: publicProcedure
    .input(EnergiesToTagsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneEnergiesToTags = await ctx.prisma.energiesToTags.upsert(input);
      return upsertOneEnergiesToTags;
    }),

}) 
