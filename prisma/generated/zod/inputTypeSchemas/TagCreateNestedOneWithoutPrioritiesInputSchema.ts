import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateWithoutPrioritiesInputSchema } from './TagCreateWithoutPrioritiesInputSchema';
import { TagUncheckedCreateWithoutPrioritiesInputSchema } from './TagUncheckedCreateWithoutPrioritiesInputSchema';
import { TagCreateOrConnectWithoutPrioritiesInputSchema } from './TagCreateOrConnectWithoutPrioritiesInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedOneWithoutPrioritiesInputSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutPrioritiesInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutPrioritiesInputSchema),z.lazy(() => TagUncheckedCreateWithoutPrioritiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutPrioritiesInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional()
}).strict();

export default TagCreateNestedOneWithoutPrioritiesInputSchema;
