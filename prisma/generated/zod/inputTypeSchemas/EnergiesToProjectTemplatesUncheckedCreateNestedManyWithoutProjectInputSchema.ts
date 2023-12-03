import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesCreateWithoutProjectInputSchema } from './EnergiesToProjectTemplatesCreateWithoutProjectInputSchema';
import { EnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema } from './EnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema';
import { EnergiesToProjectTemplatesCreateOrConnectWithoutProjectInputSchema } from './EnergiesToProjectTemplatesCreateOrConnectWithoutProjectInputSchema';
import { EnergiesToProjectTemplatesCreateManyProjectInputEnvelopeSchema } from './EnergiesToProjectTemplatesCreateManyProjectInputEnvelopeSchema';
import { EnergiesToProjectTemplatesWhereUniqueInputSchema } from './EnergiesToProjectTemplatesWhereUniqueInputSchema';

export const EnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => EnergiesToProjectTemplatesCreateWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectTemplatesCreateWithoutProjectInputSchema).array(),z.lazy(() => EnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectTemplatesUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EnergiesToProjectTemplatesCreateOrConnectWithoutProjectInputSchema),z.lazy(() => EnergiesToProjectTemplatesCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EnergiesToProjectTemplatesCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema),z.lazy(() => EnergiesToProjectTemplatesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default EnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutProjectInputSchema;
