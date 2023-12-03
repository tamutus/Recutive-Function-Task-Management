import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateWithoutFollowersInputSchema } from './TagCreateWithoutFollowersInputSchema';
import { TagUncheckedCreateWithoutFollowersInputSchema } from './TagUncheckedCreateWithoutFollowersInputSchema';
import { TagCreateOrConnectWithoutFollowersInputSchema } from './TagCreateOrConnectWithoutFollowersInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedOneWithoutFollowersInputSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutFollowersInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutFollowersInputSchema),z.lazy(() => TagUncheckedCreateWithoutFollowersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutFollowersInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional()
}).strict();

export default TagCreateNestedOneWithoutFollowersInputSchema;
