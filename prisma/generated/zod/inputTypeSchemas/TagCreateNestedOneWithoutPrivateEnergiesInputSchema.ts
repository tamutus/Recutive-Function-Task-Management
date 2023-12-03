import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateWithoutPrivateEnergiesInputSchema } from './TagCreateWithoutPrivateEnergiesInputSchema';
import { TagUncheckedCreateWithoutPrivateEnergiesInputSchema } from './TagUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { TagCreateOrConnectWithoutPrivateEnergiesInputSchema } from './TagCreateOrConnectWithoutPrivateEnergiesInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedOneWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.TagCreateNestedOneWithoutPrivateEnergiesInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => TagUncheckedCreateWithoutPrivateEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TagCreateOrConnectWithoutPrivateEnergiesInputSchema).optional(),
  connect: z.lazy(() => TagWhereUniqueInputSchema).optional()
}).strict();

export default TagCreateNestedOneWithoutPrivateEnergiesInputSchema;
