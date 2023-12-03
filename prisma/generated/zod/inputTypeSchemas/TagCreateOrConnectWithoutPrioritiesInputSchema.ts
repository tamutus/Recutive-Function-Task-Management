import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutPrioritiesInputSchema } from './TagCreateWithoutPrioritiesInputSchema';
import { TagUncheckedCreateWithoutPrioritiesInputSchema } from './TagUncheckedCreateWithoutPrioritiesInputSchema';

export const TagCreateOrConnectWithoutPrioritiesInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutPrioritiesInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutPrioritiesInputSchema),z.lazy(() => TagUncheckedCreateWithoutPrioritiesInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutPrioritiesInputSchema;
