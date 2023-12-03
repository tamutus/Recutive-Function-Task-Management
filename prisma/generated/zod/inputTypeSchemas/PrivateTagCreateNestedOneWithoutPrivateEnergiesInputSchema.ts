import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateWithoutPrivateEnergiesInputSchema } from './PrivateTagCreateWithoutPrivateEnergiesInputSchema';
import { PrivateTagUncheckedCreateWithoutPrivateEnergiesInputSchema } from './PrivateTagUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { PrivateTagCreateOrConnectWithoutPrivateEnergiesInputSchema } from './PrivateTagCreateOrConnectWithoutPrivateEnergiesInputSchema';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';

export const PrivateTagCreateNestedOneWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.PrivateTagCreateNestedOneWithoutPrivateEnergiesInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutPrivateEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateTagCreateOrConnectWithoutPrivateEnergiesInputSchema).optional(),
  connect: z.lazy(() => PrivateTagWhereUniqueInputSchema).optional()
}).strict();

export default PrivateTagCreateNestedOneWithoutPrivateEnergiesInputSchema;
