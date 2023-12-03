import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskWorksCreateWithoutWorkInputSchema } from './EnergiesToTaskWorksCreateWithoutWorkInputSchema';
import { EnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema } from './EnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema';
import { EnergiesToTaskWorksCreateOrConnectWithoutWorkInputSchema } from './EnergiesToTaskWorksCreateOrConnectWithoutWorkInputSchema';
import { EnergiesToTaskWorksCreateManyWorkInputEnvelopeSchema } from './EnergiesToTaskWorksCreateManyWorkInputEnvelopeSchema';
import { EnergiesToTaskWorksWhereUniqueInputSchema } from './EnergiesToTaskWorksWhereUniqueInputSchema';

export const EnergiesToTaskWorksCreateNestedManyWithoutWorkInputSchema: z.ZodType<Prisma.EnergiesToTaskWorksCreateNestedManyWithoutWorkInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToTaskWorksCreateWithoutWorkInputSchema),z.lazy(() => EnergiesToTaskWorksCreateWithoutWorkInputSchema).array(),z.lazy(() => EnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema),z.lazy(() => EnergiesToTaskWorksUncheckedCreateWithoutWorkInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToTaskWorksCreateOrConnectWithoutWorkInputSchema),z.lazy(() => EnergiesToTaskWorksCreateOrConnectWithoutWorkInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToTaskWorksCreateManyWorkInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema),z.lazy(() => EnergiesToTaskWorksWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToTaskWorksCreateNestedManyWithoutWorkInputSchema;
