import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsWhereUniqueInputSchema } from './EnergiesToPersonsWhereUniqueInputSchema';
import { EnergiesToPersonsCreateWithoutPersonInputSchema } from './EnergiesToPersonsCreateWithoutPersonInputSchema';
import { EnergiesToPersonsUncheckedCreateWithoutPersonInputSchema } from './EnergiesToPersonsUncheckedCreateWithoutPersonInputSchema';

export const EnergiesToPersonsCreateOrConnectWithoutPersonInputSchema: z.ZodType<Prisma.EnergiesToPersonsCreateOrConnectWithoutPersonInput> = z.object({
  where: z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EnergiesToPersonsCreateWithoutPersonInputSchema),z.lazy(() => EnergiesToPersonsUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default EnergiesToPersonsCreateOrConnectWithoutPersonInputSchema;
