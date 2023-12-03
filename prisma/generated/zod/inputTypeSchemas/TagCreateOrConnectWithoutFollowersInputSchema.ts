import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutFollowersInputSchema } from './TagCreateWithoutFollowersInputSchema';
import { TagUncheckedCreateWithoutFollowersInputSchema } from './TagUncheckedCreateWithoutFollowersInputSchema';

export const TagCreateOrConnectWithoutFollowersInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutFollowersInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutFollowersInputSchema),z.lazy(() => TagUncheckedCreateWithoutFollowersInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutFollowersInputSchema;
