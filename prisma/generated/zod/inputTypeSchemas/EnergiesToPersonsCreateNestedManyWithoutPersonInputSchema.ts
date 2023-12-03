import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToPersonsCreateWithoutPersonInputSchema } from './EnergiesToPersonsCreateWithoutPersonInputSchema';
import { EnergiesToPersonsUncheckedCreateWithoutPersonInputSchema } from './EnergiesToPersonsUncheckedCreateWithoutPersonInputSchema';
import { EnergiesToPersonsCreateOrConnectWithoutPersonInputSchema } from './EnergiesToPersonsCreateOrConnectWithoutPersonInputSchema';
import { EnergiesToPersonsCreateManyPersonInputEnvelopeSchema } from './EnergiesToPersonsCreateManyPersonInputEnvelopeSchema';
import { EnergiesToPersonsWhereUniqueInputSchema } from './EnergiesToPersonsWhereUniqueInputSchema';

export const EnergiesToPersonsCreateNestedManyWithoutPersonInputSchema: z.ZodType<Prisma.EnergiesToPersonsCreateNestedManyWithoutPersonInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToPersonsCreateWithoutPersonInputSchema),z.lazy(() => EnergiesToPersonsCreateWithoutPersonInputSchema).array(),z.lazy(() => EnergiesToPersonsUncheckedCreateWithoutPersonInputSchema),z.lazy(() => EnergiesToPersonsUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToPersonsCreateOrConnectWithoutPersonInputSchema),z.lazy(() => EnergiesToPersonsCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToPersonsCreateManyPersonInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema),z.lazy(() => EnergiesToPersonsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToPersonsCreateNestedManyWithoutPersonInputSchema;
