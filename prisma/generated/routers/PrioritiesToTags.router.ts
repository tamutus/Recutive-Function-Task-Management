import { t, publicProcedure } from "./helpers/createRouter";
import { PrioritiesToTagsAggregateSchema } from "../schemas/aggregatePrioritiesToTags.schema";
import { PrioritiesToTagsCreateManySchema } from "../schemas/createManyPrioritiesToTags.schema";
import { PrioritiesToTagsCreateOneSchema } from "../schemas/createOnePrioritiesToTags.schema";
import { PrioritiesToTagsDeleteManySchema } from "../schemas/deleteManyPrioritiesToTags.schema";
import { PrioritiesToTagsDeleteOneSchema } from "../schemas/deleteOnePrioritiesToTags.schema";
import { PrioritiesToTagsFindFirstSchema } from "../schemas/findFirstPrioritiesToTags.schema";
import { PrioritiesToTagsFindManySchema } from "../schemas/findManyPrioritiesToTags.schema";
import { PrioritiesToTagsFindUniqueSchema } from "../schemas/findUniquePrioritiesToTags.schema";
import { PrioritiesToTagsGroupBySchema } from "../schemas/groupByPrioritiesToTags.schema";
import { PrioritiesToTagsUpdateManySchema } from "../schemas/updateManyPrioritiesToTags.schema";
import { PrioritiesToTagsUpdateOneSchema } from "../schemas/updateOnePrioritiesToTags.schema";
import { PrioritiesToTagsUpsertSchema } from "../schemas/upsertOnePrioritiesToTags.schema";

export const prioritiestotagsRouter = t.router({
  aggregatePrioritiesToTags: publicProcedure
    .input(PrioritiesToTagsAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrioritiesToTags = await ctx.prisma.prioritiesToTags.aggregate(input);
      return aggregatePrioritiesToTags;
    }),
  createManyPrioritiesToTags: publicProcedure
    .input(PrioritiesToTagsCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrioritiesToTags = await ctx.prisma.prioritiesToTags.createMany(input);
      return createManyPrioritiesToTags;
    }),
  createOnePrioritiesToTags: publicProcedure
    .input(PrioritiesToTagsCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrioritiesToTags = await ctx.prisma.prioritiesToTags.create(input);
      return createOnePrioritiesToTags;
    }),
  deleteManyPrioritiesToTags: publicProcedure
    .input(PrioritiesToTagsDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrioritiesToTags = await ctx.prisma.prioritiesToTags.deleteMany(input);
      return deleteManyPrioritiesToTags;
    }),
  deleteOnePrioritiesToTags: publicProcedure
    .input(PrioritiesToTagsDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrioritiesToTags = await ctx.prisma.prioritiesToTags.delete(input);
      return deleteOnePrioritiesToTags;
    }),
  findFirstPrioritiesToTags: publicProcedure
    .input(PrioritiesToTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrioritiesToTags = await ctx.prisma.prioritiesToTags.findFirst(input);
      return findFirstPrioritiesToTags;
    }),
  findFirstPrioritiesToTagsOrThrow: publicProcedure
    .input(PrioritiesToTagsFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrioritiesToTagsOrThrow = await ctx.prisma.prioritiesToTags.findFirstOrThrow(input);
      return findFirstPrioritiesToTagsOrThrow;
    }),
  findManyPrioritiesToTags: publicProcedure
    .input(PrioritiesToTagsFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrioritiesToTags = await ctx.prisma.prioritiesToTags.findMany(input);
      return findManyPrioritiesToTags;
    }),
  findUniquePrioritiesToTags: publicProcedure
    .input(PrioritiesToTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrioritiesToTags = await ctx.prisma.prioritiesToTags.findUnique(input);
      return findUniquePrioritiesToTags;
    }),
  findUniquePrioritiesToTagsOrThrow: publicProcedure
    .input(PrioritiesToTagsFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrioritiesToTagsOrThrow = await ctx.prisma.prioritiesToTags.findUniqueOrThrow(input);
      return findUniquePrioritiesToTagsOrThrow;
    }),
  groupByPrioritiesToTags: publicProcedure
    .input(PrioritiesToTagsGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrioritiesToTags = await ctx.prisma.prioritiesToTags.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrioritiesToTags;
    }),
  updateManyPrioritiesToTags: publicProcedure
    .input(PrioritiesToTagsUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrioritiesToTags = await ctx.prisma.prioritiesToTags.updateMany(input);
      return updateManyPrioritiesToTags;
    }),
  updateOnePrioritiesToTags: publicProcedure
    .input(PrioritiesToTagsUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrioritiesToTags = await ctx.prisma.prioritiesToTags.update(input);
      return updateOnePrioritiesToTags;
    }),
  upsertOnePrioritiesToTags: publicProcedure
    .input(PrioritiesToTagsUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrioritiesToTags = await ctx.prisma.prioritiesToTags.upsert(input);
      return upsertOnePrioritiesToTags;
    }),

}) 
