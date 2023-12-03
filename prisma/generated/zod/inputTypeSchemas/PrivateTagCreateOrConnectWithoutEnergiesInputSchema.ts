import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';
import { PrivateTagCreateWithoutEnergiesInputSchema } from './PrivateTagCreateWithoutEnergiesInputSchema';
import { PrivateTagUncheckedCreateWithoutEnergiesInputSchema } from './PrivateTagUncheckedCreateWithoutEnergiesInputSchema';

export const PrivateTagCreateOrConnectWithoutEnergiesInputSchema: z.ZodType<Prisma.PrivateTagCreateOrConnectWithoutEnergiesInput> = z.object({
  where: z.lazy(() => PrivateTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutEnergiesInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutEnergiesInputSchema) ]),
}).strict();

export default PrivateTagCreateOrConnectWithoutEnergiesInputSchema;
