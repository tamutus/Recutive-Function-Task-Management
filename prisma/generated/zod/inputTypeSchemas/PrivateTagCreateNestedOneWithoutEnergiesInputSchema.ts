import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateWithoutEnergiesInputSchema } from './PrivateTagCreateWithoutEnergiesInputSchema';
import { PrivateTagUncheckedCreateWithoutEnergiesInputSchema } from './PrivateTagUncheckedCreateWithoutEnergiesInputSchema';
import { PrivateTagCreateOrConnectWithoutEnergiesInputSchema } from './PrivateTagCreateOrConnectWithoutEnergiesInputSchema';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';

export const PrivateTagCreateNestedOneWithoutEnergiesInputSchema: z.ZodType<Prisma.PrivateTagCreateNestedOneWithoutEnergiesInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutEnergiesInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateTagCreateOrConnectWithoutEnergiesInputSchema).optional(),
  connect: z.lazy(() => PrivateTagWhereUniqueInputSchema).optional()
}).strict();

export default PrivateTagCreateNestedOneWithoutEnergiesInputSchema;
