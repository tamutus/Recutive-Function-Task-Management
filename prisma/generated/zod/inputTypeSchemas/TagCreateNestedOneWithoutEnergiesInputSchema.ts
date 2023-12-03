import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateWithoutEnergiesInputSchema } from './TagCreateWithoutEnergiesInputSchema';
import { TagUncheckedCreateWithoutEnergiesInputSchema } from './TagUncheckedCreateWithoutEnergiesInputSchema';
import { TagCreateOrConnectWithoutEnergiesInputSchema } from './TagCreateOrConnectWithoutEnergiesInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedOneWithoutEnergiesInputSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutEnergiesInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutEnergiesInputSchema),z.lazy(() => TagUncheckedCreateWithoutEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutEnergiesInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional()
}).strict();

export default TagCreateNestedOneWithoutEnergiesInputSchema;
