import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';
import { PrivateTagCreateWithoutPrivateEnergiesInputSchema } from './PrivateTagCreateWithoutPrivateEnergiesInputSchema';
import { PrivateTagUncheckedCreateWithoutPrivateEnergiesInputSchema } from './PrivateTagUncheckedCreateWithoutPrivateEnergiesInputSchema';

export const PrivateTagCreateOrConnectWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.PrivateTagCreateOrConnectWithoutPrivateEnergiesInput> = z.object({
  where: z.lazy(() => PrivateTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutPrivateEnergiesInputSchema) ]),
}).strict();

export default PrivateTagCreateOrConnectWithoutPrivateEnergiesInputSchema;
