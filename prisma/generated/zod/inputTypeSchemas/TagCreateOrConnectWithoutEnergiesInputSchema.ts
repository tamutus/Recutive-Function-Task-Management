import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutEnergiesInputSchema } from './TagCreateWithoutEnergiesInputSchema';
import { TagUncheckedCreateWithoutEnergiesInputSchema } from './TagUncheckedCreateWithoutEnergiesInputSchema';

export const TagCreateOrConnectWithoutEnergiesInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutEnergiesInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutEnergiesInputSchema),z.lazy(() => TagUncheckedCreateWithoutEnergiesInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutEnergiesInputSchema;
