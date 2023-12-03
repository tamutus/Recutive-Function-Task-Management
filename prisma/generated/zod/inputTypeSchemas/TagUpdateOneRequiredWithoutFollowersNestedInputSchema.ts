import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateWithoutFollowersInputSchema } from './TagCreateWithoutFollowersInputSchema';
import { TagUncheckedCreateWithoutFollowersInputSchema } from './TagUncheckedCreateWithoutFollowersInputSchema';
import { TagCreateOrConnectWithoutFollowersInputSchema } from './TagCreateOrConnectWithoutFollowersInputSchema';
import { TagUpsertWithoutFollowersInputSchema } from './TagUpsertWithoutFollowersInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateToOneWithWhereWithoutFollowersInputSchema } from './TagUpdateToOneWithWhereWithoutFollowersInputSchema';
import { TagUpdateWithoutFollowersInputSchema } from './TagUpdateWithoutFollowersInputSchema';
import { TagUncheckedUpdateWithoutFollowersInputSchema } from './TagUncheckedUpdateWithoutFollowersInputSchema';

export const TagUpdateOneRequiredWithoutFollowersNestedInputSchema: z.ZodType<Prisma.TagUpdateOneRequiredWithoutFollowersNestedInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutFollowersInputSchema),z.lazy(() => TagUncheckedCreateWithoutFollowersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutFollowersInputSchema).optional(),
  upsert: z.lazy(() => TagUpsertWithoutFollowersInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TagUpdateToOneWithWhereWithoutFollowersInputSchema),z.lazy(() => TagUpdateWithoutFollowersInputSchema),z.lazy(() => TagUncheckedUpdateWithoutFollowersInputSchema) ]).optional(),
}).strict();

export default TagUpdateOneRequiredWithoutFollowersNestedInputSchema;
